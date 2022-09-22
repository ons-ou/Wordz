import React from "react";

function GameSettings(props){

    let handleKeyUp= (event)=>{
        if (event.key==="Enter"){
            if (event.target.name === "length")
                props.changeWordLength(event.target.value)
            else
                (event.target.value? props.changeTryNumber(parseInt(event.target.value)): props.changeTryNumber(null))
        }
    };

    return(<div>
        <label>Word Length: </label>
        <input type={"number"} min={2} max={10} placeholder={props.wordLength}  name={"length"}
               className={"number-input"}
                onKeyUp={(event)=>handleKeyUp(event)}/>
        <br/>
        <label>Max tries: </label>
        <input type={"number"} min={2} max={10} placeholder={props.tryNumber}  name={"try"}
               className={"number-input"}
                onKeyUp={(event)=>handleKeyUp(event)}/>
        <br/>

    </div>)
}

export default GameSettings