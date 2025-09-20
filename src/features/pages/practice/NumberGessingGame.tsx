import { useState } from "react";

export default function NumberGuessingGame() {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 100) + 1); // random 1–100
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 100!");
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num)) {
      setMessage("❌ Please enter a valid number.");
      return;
    }
    setAttempts((prev) => prev + 1);

    if (num === target) {
      setMessage(`🎉 Correct! The number was ${target}. Attempts: ${attempts + 1}`);
    } else if (num < target) {
      setMessage("🔼 Too low! Try again.");
    } else {
      setMessage("🔽 Too high! Try again.");
    }
    setGuess("");
  };

  const resetGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("Guess a number between 1 and 100!");
    setAttempts(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 p-6">
      <h1 className="text-3xl font-bold mb-6">🔢 Number Guessing Game</h1>

      <p className="mb-4 text-lg">{message}</p>

      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="px-4 py-2 border rounded-lg w-40 text-center"
          placeholder="Enter number"
          disabled={message.includes("Correct!")}
        />
        <button
          onClick={handleGuess}
          disabled={message.includes("Correct!")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Guess
        </button>
      </div>

      <button
        onClick={resetGame}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Reset Game
      </button>
    </div>
  );
}
