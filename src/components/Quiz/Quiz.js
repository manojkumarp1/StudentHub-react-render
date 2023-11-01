import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Quiz.css";

function QuizHome() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const languages = [
    { name: 'java', label: 'Java' },
    { name: 'python', label: 'Python' },
    { name: 'c', label: 'C' },
    { name: 'javascript', label: 'Javascript' },
  ];

  const handleStartLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const startGame = () => {
    if (selectedLanguage === "java") {
      navigate(`/quizjava`);
    
    }
    if (selectedLanguage === "python") {
      navigate(`/quizpython`);
    
    }
    if (selectedLanguage === "c") {
      navigate(`/quizc`);
    
    } 
    if (selectedLanguage === "javascript") {
      navigate(`/quizjavascript`);
    
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


      {( selectedLanguage) && (
        <button className="start-button" onClick={startGame}>
          Start Game
        </button>
      )}
    </div>
  );
}

export default QuizHome;
