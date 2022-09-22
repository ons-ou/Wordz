import GamePlay from "./GamePlay";
import GameStatus from "./GameStatus";
import React, {useState} from "react";
import GameSettings from "./GameSettings";


class WordStatus extends React.Component {
    render() {
        return null;
    }
}

function Game() {
    const [loading, setLoading] = useState(true)
    const [word, setWord] = useState("")
    const [guesses, setGuesses] = useState([])
    const [gameOver, setGameOver] = useState("ongoing")
    const [round, setRound] = useState(1)
    const [wordLength, setWordLength] = useState(5)
    const [tryNumber, setTryNumber] = useState(null)

    React.useEffect( () => {
        const fetchWord = async () => {
            setLoading(true)
            let randomWord = require('random-word-by-length');
            setWord(randomWord(wordLength));
            setLoading(false)
    }
        fetchWord()
        setGuesses([])
        setGameOver("ongoing")
    }, [round, wordLength, tryNumber]);


    return (
        <div>
        {loading && <div>Loading...</div>}
        {!loading && (
            <div className="container">
                <GamePlay word={word.toUpperCase()}
                          guesses={guesses}
                          updateGuess={(word)=> setGuesses([...guesses, word])}
                          endGame = {(s)=> setGameOver(s)}
                          gameOver = {gameOver}
                          tryNumber = {tryNumber}/>
                <div className="col-2">
                <GameStatus tries = {guesses.length}
                    gameOver = {gameOver}
                    word = {word.toUpperCase()}
                            round = {round}
                    nextRound = {()=> setRound(round+1)}/>
                <GameSettings
                    changeWordLength = {(length)=> setWordLength(length)}
                    changeTryNumber = {(n)=>setTryNumber(n)}
                    wordLength = {wordLength}
                    tryNumber = {tryNumber}/>
                </div>

            </div>
            )}
        </div>
    );
}

export default Game