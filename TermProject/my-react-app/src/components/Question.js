import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Question.css';

const Question = ({ question, onAnswer }) => {
    return (
        <div className="question-container">
            <h2>{question.question}</h2>
            <div className="answers">
                {question.answers.map((answer, index) => (
                    <button key={index} onClick={() => onAnswer(answer)}>
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;