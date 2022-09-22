import React from "react";
import Word from "./Word";
import "./components.css"

class Words extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const target = event.target
        let val = target.value.split("").filter((x) => x.toUpperCase().match(/[A-Z]/i))
        target.value = val.join("").toUpperCase()
        this.props.onGuessChange(target.value)
        }

    render() {
        let tries = []
        for (let i = 0; i < this.props.guesses.length; i++) {
            tries.push(<Word
                key={i}
                tryNumber={i}
                word={this.props.guesses[i]}
                wordToGuess={this.props.word}
            />)
        }

        return <div>
            {tries}
            {this.props.gameOver === "ongoing" &&
                (<input type={"text"} className="word-input"
                       style={{"width": this.props.word.length * 4 + 'ch'}}
                       maxLength={this.props.word.length}
                       onChange={this.handleInputChange}/>)
            }
        </div>
    }
}

export default Words