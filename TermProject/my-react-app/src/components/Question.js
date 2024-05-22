import React from 'react';
import './Question.css';
import { motion } from "framer-motion"
import background1 from '../components/backgroundAssets/background1.jpg';
import background2 from '../components/backgroundAssets/background2.jpg';
import background3 from '../components/backgroundAssets/background3.jpg';
import background4 from '../components/backgroundAssets/background4.jpg';
import background5 from '../components/backgroundAssets/background5.jpg';
import background6 from '../components/backgroundAssets/background6.jpg';
import background7 from '../components/backgroundAssets/background7.jpg';
import background8 from '../components/backgroundAssets/background8.jpg';
import background9 from '../components/backgroundAssets/background9.jpg';
import background10 from '../components/backgroundAssets/background10.jpg';
import background11 from '../components/backgroundAssets/background11.jpg';

const backgrounds = [
    background1,
    background2,
    background3,
    background4,
    background5,
    background6,
    background7,
    background8,
    background9,
    background10,
    background11,
]

const Question = ({ question, onAnswer, currentQuestionIndex }) => {
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
                    exit={{scale: 0.8}}
                >
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