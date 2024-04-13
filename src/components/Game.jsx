import GamePlay from "./GamePlay";
import GameStatus from "./GameStatus";
import React, {useState} from "react";
import GameSettings from "./GameSettings";
import AlphabetStatus from "./AlphabetStatus";
import useWord from "../hooks/useWord";

function AlphabetDict() {
    let dict = {}
    for (let i = 65; i <= 90; i++)
        dict[String.fromCharCode(i)] = "white"
    return dict
}

function Game() {
    const [guesses, setGuesses] = useState([]);
    const [gameOver, setGameOver] = useState("ongoing");
    const [round, setRound] = useState(1);
    const [tryNumber, setTryNumber] = useState(null);
    const [letterStatus, setLetterStatus] = useState(AlphabetDict());
  
    const { loading, word, wordLength, setWordLength } = useWord();
      
    return (
      <div>
        {loading && <div>Loading...</div>}
        {!loading && (
          <div>
            <div className="container">
              <GamePlay
                word={word.toUpperCase()}
                guesses={guesses}
                updateGuess={(word) => setGuesses([...guesses, word])}
                endGame={(s) => setGameOver(s)}
                gameOver={gameOver}
                tryNumber={tryNumber}
                useLetter={(k, v) => {
                  letterStatus[k] = v;
                  setLetterStatus(letterStatus);
                }}
              />
              <div className="col-2">
                <GameStatus
                  tries={guesses.length}
                  gameOver={gameOver}
                  word={word.toUpperCase()}
                  round={round}
                  nextRound={() => setRound(round + 1)}
                />
                <GameSettings
                  changeWordLength={(length) => setWordLength(length)}
                  changeTryNumber={(n) => setTryNumber(n)}
                  wordLength={wordLength}
                  tryNumber={tryNumber}
                />
              </div>
            </div>
            <div className={"container"}>
              <AlphabetStatus alphabet={letterStatus} />
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Game;
  