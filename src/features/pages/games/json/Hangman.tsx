import { useEffect, useState } from "react";
import { NavBar } from '../../../navBar/NavBar'
let alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"]
const words = ["America", "Nigeria", "England", "Rwanda", "Jamaica", "Quatar"];
// const wor
let word: string = "";

type Hangman = {
    id: number,
    value: string
    selected: boolean

}

type AlphabetType = {
    id: number,
    value: string
    selected: boolean
}
const guessedCount = 6;
let checkCount = false;
let trialCount: number = 0;
let correctCount = 0;
let newAlphabet = [...alphabetArray]
    .map((value, id) => ({
        id,
        value,
        selected: false
    }));
const Hangman = () => {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive(!active);

    //Hangman 
    const [correctCounts, setcorrectCounts] = useState<boolean>(false);
    const [trialCounts, setTrialCount] = useState<number>(0);
    const [alphabets, setAlphabets] = useState<AlphabetType[]>([]);
    const [selectedWord, setSelectedWord] = useState<Hangman[]>([]);
    const textClicked = (e: React.MouseEvent<HTMLButtonElement>) => {

        const selectedCharacter = e.currentTarget.innerHTML;
        let newSelectedword = [...selectedWord];
        trialCount++
        for (let i = 0; i < selectedWord.length; i++) {
            let element = selectedWord[i].value;
            element = element.toUpperCase();
            if (element == selectedCharacter) {
                correctCount++
                checkCount = true;
                console.log(element);
                newSelectedword[i].selected = true;
                setSelectedWord(newSelectedword);
                if(correctCount == newSelectedword.length){
                    setcorrectCounts(true);
                    newAlphabet.map(alphabet=> alphabet.selected = true);
                    let newAlphabetArray = [...newAlphabet];
                    setAlphabets(newAlphabetArray); 

                }
                // console.log(newSelectedword.length)
            }
        }
        if (checkCount) {
            trialCount--;
            checkCount = false;
        }
        setTrialCount(trialCount);
        if (trialCount == guessedCount) {
            newSelectedword.map(word => word.selected = true)
            newSelectedword.map(word => word.selected = true)
            newAlphabet.map(alphabet => alphabet.selected = true)
            let newArray = [...newAlphabet]
            setAlphabets(newArray);
            setSelectedWord(newSelectedword);

        }
        newAlphabet.map((alphabet) => {
            alphabet.value === selectedCharacter ? alphabet.selected = true : null;
        });
        let newArray = [...newAlphabet]
        setAlphabets(newArray);
    }

    useEffect(() => {
        let index = Math.floor(Math.random() * words.length);
        word = words[index];
        const wordArray = [...word]
            .map((value, i) => ({
                id: i,
                value,
                selected: false,
            }));

        let newAlphabet = [...alphabetArray]
            .map((value, id) => ({
                id,
                value,
                selected: false
            }))
        setAlphabets(newAlphabet);
        // console.log(wordArray);
        setSelectedWord(wordArray);
    }, [])



    return (
        <>
            <NavBar active={active} toggleActive={toggleActive} />
            <div className="block app-backgroung-grad text-center h-auto min-h-[100vh] pb-8">
                <div className="flex items-center h-[45px] pt-[4vh] ml-4 text-[#e2e8f0]" >
                    <button onClick={() => setActive(!active)} className="border border-[rgba(255,255,255,0.08)] p-[8px] rounded-[10px]">
                        <i className="bx bx-menu"></i>
                    </button>
                </div>
                <h3 className="text-[#fff] text-[30px] font-extrabold pt-[1vh]">Hagman Game</h3>
                <p className={`${trialCount == guessedCount ? "text-rose-500" : "text-amber-400 "} text-[15px] font-light mt-2`}>word guessed:  {`${trialCounts} / ${guessedCount}`} </p>
                <div className="flex justify-center mt-8 gap-3">
                    {selectedWord.map((word, index) =>
                        <div key={index} className="border-b border-[#fff] border-solid w-[20px] text-[#fff] pb-1">
                            {word.selected ? <span>{word.value.toUpperCase()}</span> : <span></span>}
                        </div>
                    )}
                </div>
                <section className="border border-[rgba(255,255,255,0.08)] min-w-[390px] w-[50vw] p-[15px] ml-auto mr-auto mt-[40px] rounded-[15px]">
                    <div className="grid md:grid-cols-6 lg:grid-cols-7 sm:grid-cols-5 grid-cols-5 gap-y-6 place-items-center">
                        {alphabets.map((alphabet, index) =>
                            <button key={index} onClick={textClicked} disabled={alphabet.selected} className={`md:w-[60px] md:h-[70px] sm:w-[40px] sm:h-[50px] w-[40px] h-[60px]  rounded-[5px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]  ${alphabet.selected ? "text-gray-500" : "hover:scale-y-110 hover:scale-x-105 transition-transform duration-200 cursor-pointer text-blue-50"} `}>{alphabet.value}</button>
                        )}
                    </div>

                </section>
                { trialCount == guessedCount &&
                    <div className="mt-3">
                        <p className="text-red-500 text-[20px]">{`you lose the word was: ${word.toUpperCase()}`}</p>
                        <a href=""><button className="px-3 py-2 border border-[#fff] bg-green-500 rounded-[10px] mt-2" >Play again</button></a>
                    </div>
                }

                 { correctCounts &&
                    <div className="mt-3">
                        <p className="text-green-400 text-[20px]">{`you win 🍊 🍉  🍓`}</p>
                        <a href=""><button className="px-3 py-2 border border-[#fff] bg-green-500 rounded-[10px] mt-2" >Play again</button></a>
                    </div>
                }
                
            </div>
        </>
    )
}

export default Hangman


