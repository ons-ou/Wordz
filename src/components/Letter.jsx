import React from "react";

function Letter(props) {

    if (props.value)
        return (<span className="letter" style={{textDecorationColor: props.color}}>
            {props.value}
        </span>)
}

export default Letter;