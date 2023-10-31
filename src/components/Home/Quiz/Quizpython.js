import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Quizgame.css";
const pythonQuizQuestions = [
  {
    question: "Who developed Python Programming Language?",
    options: ["Wick van Rossum", "Rasmus Lerdorf", "Guido van Rossum", "Niene Stom"],
    correctAnswer: "Guido van Rossum",
  },
  {
    question: "Which type of Programming does Python support?",
    options: ["object-oriented programming", "structured programming", "functional programming", "all of the mentioned"],
    correctAnswer: "all of the mentioned",
  },
  {
    question: "Is Python case sensitive when dealing with identifiers?",
    options: ["no", "yes", "machine dependent", "none of the mentioned"],
    correctAnswer: "yes",
  },
  // Add more questions here
];

function Quizpython() {
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

      if (option === pythonQuizQuestions[currentQuestion].correctAnswer) {
        setUserScore((prevScore) => prevScore + 1);
      }

      setTimeout(() => {
        if (currentQuestion + 1 < pythonQuizQuestions.length) {
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
      <h1>Python Technical Quiz</h1>
      <div className="quiz-container">
        {currentQuestion < pythonQuizQuestions.length ? (
          <div className="question">
            <p>{pythonQuizQuestions[currentQuestion].question}</p>
            <ul>
              {pythonQuizQuestions[currentQuestion].options.map((option, index) => (
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
            <p>Your Score: {userScore} out of {pythonQuizQuestions.length}</p>
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

export default Quizpython;
