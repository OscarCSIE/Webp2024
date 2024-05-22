import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Result.css';

const Result = ({ result }) => {
    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="result"
        >
            <div className="result-container">
                <h2>Your suitable class is: {result}</h2>
            </div>
        </CSSTransition>
    );
};

export default Result;
