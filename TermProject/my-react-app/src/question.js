import React from 'react';
import './question.css';
import { motion } from "framer-motion"
import { remainingBackgrounds} from './App.js';

const Question = ({ setCurrentBackground, setRemainingBackgrounds, question, onAnswer: handleAnswer, currentQuestionIndex }) => {
    const onAnswer = (answer) => {
        handleAnswer(answer);
        // Then, select a random background:
        const randomIndex = Math.floor(Math.random() * remainingBackgrounds.length);
        const newBackground = remainingBackgrounds[randomIndex];

        // Update the current background:
        setCurrentBackground(newBackground);

        // Remove the selected background from the remaining ones:
        setRemainingBackgrounds(remainingBackgrounds.filter((_, index) => index !== randomIndex));
    };
    return (
        <motion.div
            className="question-container"
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 250 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -250 }}
            transition={{ duration: 1.0 }}
        >
            <div>
                <motion.h2
                    initial={{scale: 0.5}}
                    animate={{scale: 1.0}}
                    exit={{scale: 0.8}}>
                    {question.question}
                </motion.h2>
                <motion.div className="answers">
                    {question.answers.map((answer, index) => (
                        <motion.button 
                            key={index} onClick={() => onAnswer(answer)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {answer}
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Question;