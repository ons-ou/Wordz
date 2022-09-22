import "./components.css";
import React from "react";

function GameStatus(props){
        return (
            <div>
            Welcome to Wordle, an online word guessing game.
            <br/>
                Round: {props.round}
                <br/>
                {props.gameOver==="ongoing" && (<span>You have made {props.tries} tries
                <br/>
                    <button onClick={()=>{
                        alert("The word was "+ props.word)
                        props.nextRound()}}>Skip</button>
                </span>)}
                {props.gameOver==="win" &&  (<span>You won in {props.tries} tries. <br/>The word was {props.word}
                <br/>
                    <button onClick={props.nextRound}>Restart</button>
                </span>)}
                {props.gameOver==="loose" &&  (<span>You have lost. You made {props.tries} tries. <br/>The word was {props.word}
                <br/>
                    <button onClick={props.nextRound}>Restart</button>
                </span>)}
            </div>
        )

}

export default GameStatus