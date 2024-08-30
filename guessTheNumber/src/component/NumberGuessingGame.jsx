import React, { useState } from "react";

function NumberGuessingGame() {
    const [targetNumber, setTargetNumber] = useState(generateRandomNumber(1, 100));
    const [userGuess, setUserGuess] = useState("");
    const [feedback, setFeedback] = useState("");
    const [attempts, setAttempts] = useState(0);
    const [maxAttempts, setMaxAttempts] = useState(5);
    const [gameOver, setGameOver] = useState(false);

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleGuess = () => {
        if (!userGuess || isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            setFeedback("Please enter a valid number between 1 and 100.");
            return;
        }

        const guess = parseInt(userGuess);
        setAttempts(attempts + 1);

        if (guess > targetNumber) {
            setFeedback("Your number is high");
        } else if (guess < targetNumber) {
            setFeedback("Your number is low");
        } else {
            setFeedback(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
            setGameOver(true);
        }

        if (attempts + 1 >= maxAttempts && guess !== targetNumber) {
            setFeedback(`Game Over! The number was ${targetNumber}.`);
            setGameOver(true);
        }
    };

    const resetGame = () => {
        setTargetNumber(generateRandomNumber(1, 100));
        setUserGuess("");
        setFeedback("");
        setAttempts(0);
        setGameOver(false);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Guess a number from 1 to 100</h1>
            <input
                type="number"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                disabled={gameOver}
                placeholder="Enter your guess"
                style={{ padding: "10px", fontSize: "16px" }}
            />
            <button onClick={handleGuess} disabled={gameOver} style={{ marginLeft: "10px", padding: "10px 20px" }}>
                Check
            </button>
            <p>{feedback}</p>
            <p>You have {maxAttempts - attempts} Chances</p>
            {gameOver && (
                <button onClick={resetGame} style={{ marginTop: "20px", padding: "10px 20px" }}>
                    Restart Game
                </button>
            )}
        </div>
    );
}

export default NumberGuessingGame;
