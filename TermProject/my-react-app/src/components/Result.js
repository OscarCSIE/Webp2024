import React from 'react';
import './Result.css';

const Result = ({ result }) => {
    return (
        <div className="result-container">
            <h2>Your suitable class is: {result}</h2>
        </div>
    );
};

export default Result;