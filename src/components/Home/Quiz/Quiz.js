import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Quiz.css";

function QuizHome() {
  const navigate = useNavigate();
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedTimer, setSelectedTimer] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const languages = [
    { name: 'java', label: 'Java' },
    { name: 'python', label: 'Python' },
    { name: 'c', label: 'C' },
  ];

  const difficulties = [
    { name: 'easy', label: 'Easy' },
    { name: 'medium', label: 'Medium' },
    { name: 'hard', label: 'Hard' },
  ];

  const timers = [60, 90, 120];

  const handleStartLanguage = (language) => {
    setSelectedLanguage(language);
  };


  const handleStartGame = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const handleSelectTimer = (timer) => {
    setSelectedTimer(timer);
  };

  const startGame = () => {
    if (selectedLanguage == "java" && selectedDifficulty && selectedTimer) {
      navigate(`/quizjava?difficulty=${selectedDifficulty}&timer=${selectedTimer}`);
    
    }
    if (selectedLanguage == "python" && selectedDifficulty && selectedTimer) {
      navigate(`/quizpython?difficulty=${selectedDifficulty}&timer=${selectedTimer}`);
    
    }
    if (selectedLanguage == "c" && selectedDifficulty && selectedTimer) {
      navigate(`/quizc?difficulty=${selectedDifficulty}&timer=${selectedTimer}`);
    
    } 
    else {
      // Display an error message or prompt the user to make selections.
    }
  };

  return (
    <div>
      <div className="language-selection">
        <strong>Select Language:</strong>
        <div className="Language-buttons">
          {languages.map((language) => (
            <button
              key={language.name}
              className={`language-btn ${language.name === selectedLanguage ? 'selected' : ''}`}
              onClick={() => handleStartLanguage(language.name)}
            >
              {language.label}
            </button>
          ))}
        </div>
      </div>


      <div className="difficulty-selection">
        <strong>Select Difficulty:</strong>
        <div className="difficulty-buttons">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty.name}
              className={`difficulty-btn ${difficulty.name === selectedDifficulty ? 'selected' : ''}`}
              onClick={() => handleStartGame(difficulty.name)}
            >
              {difficulty.label}
            </button>
          ))}
        </div>
      </div>

      <div className="timer-selection">
        <strong>Select Timer:</strong>
        <div className="timer-buttons">
          {timers.map((timer) => (
            <button
              key={timer}
              className={`timer-btn ${timer === selectedTimer ? 'selected' : ''}`}
              onClick={() => handleSelectTimer(timer)}
            >
              {timer} sec
            </button>
          ))}
        </div>
      </div>

      {( selectedLanguage && selectedDifficulty && selectedTimer) && (
        <button className="start-button" onClick={startGame}>
          Start Game
        </button>
      )}
    </div>
  );
}

export default QuizHome;
