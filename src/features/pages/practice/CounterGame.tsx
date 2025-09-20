import { useState, useEffect } from "react";

export default function CounterClickerGame() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds
  const [gameActive, setGameActive] = useState(false);

  // Countdown timer
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (gameActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
    return () => clearInterval(timer);
  }, [gameActive, timeLeft]);

  const startGame = () => {
    setCount(0);
    setTimeLeft(10);
    setGameActive(true);
  };

  const handleClick = () => {
    if (gameActive) setCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-indigo-300">
      <h1 className="text-3xl font-bold mb-6">⚡ Counter Clicker Game</h1>

      <p className="text-xl mb-4">Time Left: {timeLeft}s</p>
      <p className="text-2xl font-semibold mb-6">Score: {count}</p>

      {!gameActive ? (
        <button
          onClick={startGame}
          className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600 transition"
        >
          Start Game
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="px-10 py-10 text-2xl bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 active:scale-95 transition"
        >
          Click Me!
        </button>
      )}

      {!gameActive && timeLeft === 0 && (
        <p className="mt-6 text-lg font-medium text-red-700">
          Game Over! 🎉 Final Score: {count}
        </p>
      )}
    </div>
  );
}
