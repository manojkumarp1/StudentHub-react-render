import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Quizgame.css";
const javaQuizQuestions = [
  {
    question: "What is the JVM?",
    options: ["Java Virtual Machine", "Java Verification Machine", "Java Validating Machine", "Java Visual Machine"],
    correctAnswer: "Java Virtual Machine",
  },
  {
    question: "What is the main purpose of the 'public static void main(String[] args)' method in Java?",
    options: ["Define class variables", "Declare main class", "Entry point of the program", "Print 'Hello, World!'"],
    correctAnswer: "Entry point of the program",
  },
  {
    question: "Which keyword is used to create a new instance of a class in Java?",
    options: ["new", "create", "instance", "object"],
    correctAnswer: "new",
  },
  // Add more questions here
];

function Quizjava() {
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

      if (option === javaQuizQuestions[currentQuestion].correctAnswer) {
        setUserScore((prevScore) => prevScore + 1);
      }

      setTimeout(() => {
        if (currentQuestion + 1 < javaQuizQuestions.length) {
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
      <h1>Java Technical Quiz</h1>
      <div className="quiz-container">
        {currentQuestion < javaQuizQuestions.length ? (
          <div className="question">
            <p>{javaQuizQuestions[currentQuestion].question}</p>
            <ul>
              {javaQuizQuestions[currentQuestion].options.map((option, index) => (
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
            <p>Your Score: {userScore} out of {javaQuizQuestions.length}</p>
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

export default Quizjava;
