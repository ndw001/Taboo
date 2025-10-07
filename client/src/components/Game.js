import React, { useState } from 'react';

const TabooGame = () => {
    const [words, setWords] = useState([]);
    const [currentWord, setCurrentWord] = useState('');
    const [score, setScore] = useState(0);

    const startGame = () => {
        // Logic to start the game and fetch words
    };

    const handleGuess = (guess) => {
        if (guess === currentWord) {
            setScore(score + 1);
            // Logic to get a new word
        }
    };

    return (
        <div>
            <h1>Taboo Game</h1>
            <button onClick={startGame}>Start Game</button>
            <h2>Current Word: {currentWord}</h2>
            <input type='text' onChange={(e) => handleGuess(e.target.value)} />
            <h3>Score: {score}</h3>
        </div>
    );
};

export default TabooGame;