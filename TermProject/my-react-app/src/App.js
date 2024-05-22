import React, { useState } from 'react';
import Question from './components/Question';
import Result from './components/Result';
import QuestionList from './QuestionList';
import './App.css';

const calculateResult = (answers) => {
  const scores = {
    Barbarian: 0,
    Bard: 0,
    Cleric: 0,
    Druid: 0,
    Fighter: 0,
    Monk: 0,
    Paladin: 0,
    Ranger: 0,
    Rogue: 0,
    Sorcerer: 0,
    Warlock: 0,
    Wizard: 0,
  };

  const answerMapping = {
    'Strength and power': 'Barbarian',
    'Knowledge and wisdom': 'Wizard',
    'Faith and devotion': 'Cleric',
    'Harmony with nature': 'Druid',
    'Direct confrontation': 'Fighter',
    'Strategic planning and cunning': 'Rogue',
    'Using magical abilities': 'Sorcerer',
    'Persuasion and diplomacy': 'Bard',
    'In the heart of a battle': 'Barbarian',
    'In a library or study': 'Wizard',
    'In a sacred temple': 'Cleric',
    'In the wilderness': 'Ranger',
    'A great axe': 'Barbarian',
    'A spell book or wand': 'Wizard',
    'A holy symbol or mace': 'Cleric',
    'A bow or crossbow': 'Ranger',
    'Training and honing physical skills': 'Fighter',
    'Reading and studying new spells': 'Wizard',
    'Meditating or praying': 'Cleric',
    'Exploring nature': 'Druid',
    'Lead the charge and inspire others': 'Paladin',
    'Support and heal your allies': 'Cleric',
    'Provide strategic advantages and sneak attacks': 'Rogue',
    'Use spells to control the battlefield': 'Wizard',
    'A desire for adventure and discovery': 'Ranger',
    'The pursuit of knowledge and mastery': 'Wizard',
    'A commitment to a higher cause': 'Paladin',
    'The thrill of battle': 'Barbarian',
    'Hand-to-hand combat': 'Monk',
    'Playing musical instruments': 'Bard',
    'Crafting and using magic items': 'Wizard',
    'Tracking and survival': 'Ranger',
    'Bold and brash': 'Barbarian',
    'Intelligent and curious': 'Wizard',
    'Devout and righteous': 'Paladin',
    'Mysterious and cunning': 'Warlock',
    'A tale of epic battles and heroism': 'Fighter',
    'A mystical journey of magic and discovery': 'Sorcerer',
    'A sacred quest to vanquish evil': 'Paladin',
    'An adventure in the untamed wilds': 'Druid',
  };

  answers.forEach(answer => {
    const className = answerMapping[answer];
    if (className) {
      scores[className]++;
    }
  });

  const highestScore = Math.max(...Object.values(scores));
  const result = Object.keys(scores).find(key => scores[key] === highestScore);

  return result;
};

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QuestionList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate result when all questions are answered
      const result = calculateResult(newAnswers);
      setResult(result);
    }
  };

  return (
    <div className="App">
      {result ? (
        <Result result={result} />
      ) : (
        <Question
          question={QuestionList[currentQuestionIndex]}
          onAnswer={handleAnswer}
          currentQuestionIndex={currentQuestionIndex}
        />
      )}
    </div>
  );
}

export default App;