import { useState, useEffect, useRef } from "react";

type Position = { x: number; y: number };

const gridSize = 15; // 15x15 board
const initialSnake: Position[] = [{ x: 7, y: 7 }];
const directions: Record<string, Position> = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>(initialSnake);
  const [food, setFood] = useState<Position>({
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  });
  const [direction, setDirection] = useState<Position>(directions.ArrowRight);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Handle keyboard input
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (directions[e.key]) {
        setDirection(directions[e.key]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Game loop
  useEffect(() => {
    if (gameOver) return;

    intervalRef.current = setInterval(() => {
      setSnake((prev) => {
        const head = {
          x: prev[0].x + direction.x,
          y: prev[0].y + direction.y,
        };

        // Check wall or self collision
        if (
          head.x < 0 ||
          head.y < 0 ||
          head.x >= gridSize ||
          head.y >= gridSize ||
          prev.some((segment) => segment.x === head.x && segment.y === head.y)
        ) {
          setGameOver(true);
          return prev;
        }

        let newSnake = [head, ...prev];

        // Check if eating food
        if (head.x === food.x && head.y === food.y) {
          setFood({
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize),
          });
          setScore((s) => s + 1);
        } else {
          newSnake.pop(); // move forward (remove tail)
        }

        return newSnake;
      });
    }, 200); // move every 200ms

    return () => clearInterval(intervalRef.current!);
  }, [direction, food, gameOver]);

  const resetGame = () => {
    setSnake(initialSnake);
    setDirection(directions.ArrowRight);
    setFood({
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    });
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">🐍 Snake Game</h1>
      <p className="mb-2 text-lg">Score: {score}</p>

      <div
        className="grid bg-green-200"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 20px)`,
          gridTemplateRows: `repeat(${gridSize}, 20px)`,
        }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, i) => {
          const x = i % gridSize;
          const y = Math.floor(i / gridSize);
          const isSnake = snake.some((s) => s.x === x && s.y === y);
          const isFood = food.x === x && food.y === y;

          return (
            <div
              key={i}
              className={`w-5 h-5 border border-green-300 ${
                isSnake ? "bg-green-600" : isFood ? "bg-red-500" : ""
              }`}
            />
          );
        })}
      </div>

      {gameOver && (
        <div className="mt-4 text-center">
          <p className="text-red-600 text-lg mb-2">💀 Game Over!</p>
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
