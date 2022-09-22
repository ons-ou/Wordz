import React from "react";
import "./components.css"


function AlphabetStatus(props) {

    let res =[]
    let i=0
    for (let [k, value] of Object.entries(props.alphabet)) {
        res.push(<p key={i++} className={"alphabet"} style={{backgroundColor : value}}>{k}</p>)
    }

    return <div>{res} </div>

}

export default AlphabetStatus