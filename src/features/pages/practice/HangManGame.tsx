import { useState } from "react";

const words = ["react", "javascript", "hangman", "programming", "developer"];

export default function HangmanGame() {
  const getRandomWord = () =>
    words[Math.floor(Math.random() * words.length)].toLowerCase();

  const [word, setWord] = useState(getRandomWord);
  const [guessed, setGuessed] = useState<string[]>([]);
  const [wrong, setWrong] = useState(0);

  const maxWrong = 6; // number of allowed mistakes

  const handleGuess = (letter: string) => {
    if (guessed.includes(letter)) return;

    setGuessed((prev) => [...prev, letter]);

    if (!word.includes(letter)) {
      setWrong((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    setWord(getRandomWord());
    setGuessed([]);
    setWrong(0);
  };

  const isWinner = word.split("").every((letter) => guessed.includes(letter));
  const isLoser = wrong >= maxWrong;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 p-6">
      <h1 className="text-3xl font-bold mb-4">🎯 Hangman Game</h1>

      <p className="mb-2 text-lg">Wrong guesses: {wrong} / {maxWrong}</p>

      <div className="flex gap-2 mb-6">
        {word.split("").map((letter, i) => (
          <span
            key={i}
            className="w-8 border-b-2 border-black text-center text-xl font-semibold"
          >
            {guessed.includes(letter) || isLoser ? letter : ""}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mb-6">
        {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
          <button
            key={letter}
            onClick={() => handleGuess(letter)}
            disabled={guessed.includes(letter) || isWinner || isLoser}
            className={`px-3 py-2 rounded ${
              guessed.includes(letter)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {(isWinner || isLoser) && (
        <div className="text-center">
          {isWinner && <p className="text-green-600 text-xl mb-2">🎉 You Win!</p>}
          {isLoser && (
            <p className="text-red-600 text-xl mb-2">
              😢 You Lose! The word was: <b>{word}</b>
            </p>
          )}
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
