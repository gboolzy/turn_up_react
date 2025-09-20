import { useEffect, useState } from "react";
import { NavBar } from '../../navBar/NavBar'

const initialValues = ["🍎", "🍌", "🍇", "🍊", "🍉", "🍓"];
type Card = {
    id: number;
    value: string;
    flipped: boolean;
    matched: boolean;
};
let count = 0;
type flippedCards = {
    firstNo?: number,
    secondNo?: number,
    firstValue?: string,
    secondValue?: string
}

let winCount = 0;
let totalGuessLimit = 5;
let attemptCount = 0;
const CardGame = () => {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive(!active);

    const [attempts, setAttemps] = useState<number>(0);
    const [checkWin, setCheckWin] = useState<boolean>(false);
    const [cards, setCards] = useState<Card[]>([]);
    const [flippedCard, setFlippedCard] = useState<flippedCards>();
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
        console.log(shuffled)
    }, [])


    const getClickedId = (id: number) => {

        let newFlippedcards = { ...flippedCard };

        count++;

        const newCards = cards.map((card) =>
            card.id === id ? { ...card, flipped: true } : card
        );
        if (count == 1) {
            newFlippedcards.firstNo = id;
            newFlippedcards.firstValue = cards[id].value
        } else if (count == 2) {
            if (newFlippedcards.firstNo == id) {
                count = 1;
            } else {
                newFlippedcards.secondNo = id;
                newFlippedcards.secondValue = cards[id].value
            }

        }

        setCards(newCards);
        setFlippedCard(newFlippedcards)
    }
    useEffect(() => {
        if (count == 2) {
            if (flippedCard?.firstValue == flippedCard?.secondValue) {
                winCount++
                console.log(flippedCard);
                count = 0;
                if (winCount == initialValues.length) {
                    setCheckWin(true);
                }
            } else {
                let updatedCardFlipped = [...cards];
                let firstId = flippedCard?.firstNo || 0;
                let secondId = flippedCard?.secondNo || 0;
                updatedCardFlipped[firstId].flipped = false;
                updatedCardFlipped[secondId].flipped = false;

                setTimeout(() => {
                    setCards(updatedCardFlipped);
                    attemptCount++;
                    setAttemps(attemptCount);

                }, 800);

                count = 0;
            }

        }
    }, [cards])

    return (

        <>
            <NavBar active={active} toggleActive={toggleActive} />
            <div className="block app-backgroung-grad text-center h-auto min-h-[100vh] pb-8">
                <div className="flex items-center h-[45px] pt-[2vh] ml-4 text-[#e2e8f0]" >
                    <button onClick={() => setActive(!active)} className="border border-[rgba(255,255,255,0.08)] p-[8px] rounded-[10px]">
                        <i className="bx bx-menu"></i>
                    </button>
                </div>
                <h3 className="text-[#fff] text-[25px] font-extrabold pt-[1vh]">Card Game</h3>
                <p className={`${attempts == totalGuessLimit ? "text-rose-500" : "text-amber-400 "} text-[15px] font-light mt-1`}>Attempts:  {`${attempts} / ${totalGuessLimit}`} </p>

                <h3 className="text-green-300 text-[20px] font-light pt-[10px]">Select matching cards</h3>
                <section className="border border-[rgba(255,255,255,0.08)] min-w-[390px] w-[50vw] p-[15px] ml-auto mr-auto mt-[20px] rounded-[15px]">
                    <div className="grid grid-cols-4 gap-y-6 place-items-center">
                        {cards.map((card) =>
                            <button key={card.id} disabled={attempts == totalGuessLimit} onClick={() => getClickedId(card.id)} className={`${card.flipped ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]' : 'bg-amber-50 border border-[rgba(255,255,255,0.08)]'}  w-20 h-24 rounded-lg flex items-center justify-center transition-all duration-300`}>
                                {card.flipped ? <p>{card.value}</p> : null}
                            </button>
                        )}
                    </div>

                </section>
                {attempts == totalGuessLimit &&
                    <div className="mt-3">
                        <p className="text-red-500 text-[20px]">{`you lost: you exceeded your limit`}</p>
                        <a href=""><button className="px-3 py-2 border border-[#fff] bg-green-500 rounded-[10px] mt-2" >Play again</button></a>
                    </div>
                }

                {checkWin &&
                    <div className="mt-3">
                        <p className="text-green-400 text-[20px]">{`you win 🍊 🍉  🍓`}</p>
                        <a href=""><button className="px-3 py-2 border border-[#fff] bg-green-500 rounded-[10px] mt-2" >Play again</button></a>
                    </div>
                }
            </div>
        </>
    )
}

export default CardGame



// Argument of type '{ firstNo?: number | undefined; secondNo?: number | undefined; firstValue?: string | undefined; secondValue?: string | undefined; }' is not assignable to parameter of type 'SetStateAction<flippedCards | undefined>'.
//   Type '{ firstNo?: number | undefined; secondNo?: number | undefined; firstValue?: string | undefined; secondValue?: string | undefined; }' is not assignable to type 'flippedCards'.
//     Types of property 'firstNo' are incompatible.
//       Type 'number | undefined' is not assignable to type 'number'.
//         Type 'undefined' is not assignable to type 'number'.


// const newCards = [...cards]; // copy array
// for (let i = 0; i < newCards.length; i++) {
//     if (newCards[i].id === id) {
//         newCards[i] = { ...newCards[i], flipped: true }; // copy object
//     }
// }

// julius_adetoro@sagfieldsclean.co.uk	
//password: gE%@8!5b(iQ?

// giwaolatunde@sagfieldsclean.co.uk
// password: lP1GKFEOyvu-	