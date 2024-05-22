import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Question.css';

const Question = ({ question, onAnswer, currentQuestionIndex }) => {
    return (
        <TransitionGroup className="question-container">
            <CSSTransition
                key={currentQuestionIndex}
                timeout={300}
                classNames="fade"
            >
                <div>
                    <h2>{question.question}</h2>
                    <div className="answers">
                        {question.answers.map((answer, index) => (
                            <button key={index} onClick={() => onAnswer(answer)}>
                                {answer}
                            </button>
                        ))}
                    </div>
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default Question;
