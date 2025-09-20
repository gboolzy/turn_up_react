import { useState, useEffect } from "react";

export default function WhackAMole() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20); // 20-second game
  const [activeMole, setActiveMole] = useState<number | null>(null);
  const [gameActive, setGameActive] = useState(false);

  // Timer countdown
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (gameActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
      setActiveMole(null);
    }
    return () => clearInterval(timer);
  }, [gameActive, timeLeft]);

  // Random mole popping up
  useEffect(() => {
    let moleTimer: ReturnType<typeof setTimeout>;
    // let moleTimer: NodeJS.Timeout;
    
    if (gameActive) {
      moleTimer = setInterval(() => {
        setActiveMole(Math.floor(Math.random() * 9)); // random hole 0–8
      }, 800); // mole changes every 800ms
    }
    return () => clearInterval(moleTimer);
  }, [gameActive]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(20);
    setGameActive(true);
  };

  const whackMole = (index: number) => {
    if (gameActive && index === activeMole) {
      setScore((prev) => prev + 1);
      setActiveMole(null); // mole disappears when hit
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-6">
      <h1 className="text-3xl font-bold mb-4">🐹 Whack-a-Mole</h1>

      <p className="mb-2 text-xl">Time Left: {timeLeft}s</p>
      <p className="mb-6 text-2xl font-semibold">Score: {score}</p>

      {!gameActive ? (
        <button
          onClick={startGame}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Start Game
        </button>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <button
              key={i}
              onClick={() => whackMole(i)}
              className="w-24 h-24 bg-brown-400 rounded-lg flex items-center justify-center text-3xl shadow-md"
            >
              {activeMole === i ? "🐹" : ""}
            </button>
          ))}
        </div>
      )}

      {!gameActive && timeLeft === 0 && (
        <p className="mt-6 text-lg font-medium text-red-700">
          Game Over! 🎉 Final Score: {score}
        </p>
      )}
    </div>
  );
}
