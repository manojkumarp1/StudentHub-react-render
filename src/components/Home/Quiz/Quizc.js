import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Quizgame.css";
const cQuizQuestions = [
  {
    question: "Who is the father of C language?",
    options: ["Steve Jobs", "James Gosling", "Dennis Ritchie", "Rasmus Lerdorf"],
    correctAnswer: "Dennis Ritchie",
  },
  {
    question: "Which of the following is not a valid C variable name?",
    options: ["int number;", "float rate;", "int variable_count;", "int $main;"],
    correctAnswer: "int $main;",
  },
  {
    question: "Which of the following is true for variable names in C?",
    options: ["They can contain alphanumeric characters as well as special characters", "It is not an error to declare a variable to be one of the keywords(like goto, static)", "Variable names cannot start with a digit", "Variable can be of any length"],
    correctAnswer: "yes",
  },
  // Add more questions here
];

function Quizc() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const difficulty = params.get('difficulty');
  const timer = parseInt(params.get('timer'));

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(timer);
  const [gameEnded, setGameEnded] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    if (!gameEnded) {
      setSelectedOption(option);

      if (option === cQuizQuestions[currentQuestion].correctAnswer) {
        setUserScore((prevScore) => prevScore + 1);
      }

      setTimeout(() => {
        if (currentQuestion + 1 < cQuizQuestions.length) {
          setCurrentQuestion((prevQuestion) => prevQuestion + 1);
          setSelectedOption(null);
        } else {
          setGameEnded(true);
        }
      }, 1000);
    }
  };

  const decrementTime = () => {
    if (timeLeft > 0) {
      setTimeLeft((prevTime) => prevTime - 1);
    } else {
      setGameEnded(true);
    }
  };

  useEffect(() => {
    if (!gameEnded) {
      const timer = setInterval(decrementTime, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, gameEnded]);

  return (
    <div className="quiz-game">
      <h1>C Language Technical Quiz</h1>
      <div className="quiz-container">
        {currentQuestion < cQuizQuestions.length ? (
          <div className="question">
            <p>{cQuizQuestions[currentQuestion].question}</p>
            <ul>
              {cQuizQuestions[currentQuestion].options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={selectedOption === option ? "selected" : ""}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {gameEnded && (
          <div className="game-completed">
            <p>Congratulations! You've completed the quiz.</p>
            <p>Your Score: {userScore} out of {cQuizQuestions.length}</p>
          </div>
        )}
      </div>
      <div className="game-buttons">
        <button className="reset-button" onClick={() => window.location.reload()}>
          Reset
        </button>
        <button className="home-button" onClick={() => navigate('/quiz')}>
          Home
        </button>
      </div>
    </div>
  );
}

export default Quizc;
