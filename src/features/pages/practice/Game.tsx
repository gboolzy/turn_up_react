import { useState, useEffect } from "react";

type Card = {
    id: number;
    value: string;
    flipped: boolean;
    matched: boolean;
};

const initialValues = ["🍎", "🍌", "🍇", "🍊", "🍉", "🍓"];

const Game = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [disabled, setDisabled] = useState(false);

    // Shuffle cards at start
    useEffect(() => {
        const shuffled = [...initialValues, ...initialValues]
            .sort(() => Math.random() - 0.5)
            .map((value, i) => ({
                id: i,
                value,
                flipped: false,
                matched: false,
            }));
        setCards(shuffled);
    }, []);

    const handleFlip = (id: number) => {
        if (disabled) return;
        if (flippedCards.length === 2) return;

        const newCards = cards.map((card) =>
            card.id === id ? { ...card, flipped: true } : card
        );
        setCards(newCards);
        setFlippedCards([...flippedCards, id]);
    };

    // Check for match
    useEffect(() => {
        if (flippedCards.length === 2) {
            setDisabled(true);
            const [first, second] = flippedCards;
            if (cards[first].value === cards[second].value) {
                setCards((prev) =>
                    prev.map((card) =>
                        card.value === cards[first].value
                            ? { ...card, matched: true }
                            : card
                    )
                );
                resetTurn();
            } else {
                setTimeout(() => {
                    setCards((prev) =>
                        prev.map((card) =>
                            card.id === first || card.id === second
                                ? { ...card, flipped: false }
                                : card
                        )
                    );
                    resetTurn();
                }, 1000);
            }
        }
    }, [flippedCards]);

    const resetTurn = () => {
        setFlippedCards([]);
        setDisabled(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 p-4">
            <h1 className="text-3xl font-bold mb-6">Memory Card Game</h1>
            <div className="grid grid-cols-4 gap-4">
                {cards.map((card) => (
                    <button
                        key={card.id}
                        onClick={() => handleFlip(card.id)}
                        className={`w-20 h-24 flex items-center justify-center text-2xl font-bold rounded-lg shadow-md transition 
              ${card.flipped || card.matched
                                ? "bg-white"
                                : "bg-purple-500 text-transparent"
                            }`}
                    >
                        {card.flipped || card.matched ? card.value : "?"}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Game;
