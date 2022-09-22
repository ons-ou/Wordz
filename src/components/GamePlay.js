import React from "react";
import Words from "./WordGroup";
import "./components.css"

class GamePlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonDisabled : true
        }
        this.current = ""
    }

    async onGuessChange(word){
        this.current = word

        if (this.current.length !== this.props.word.length)
            this.setState({buttonDisabled : true});
        else
        {
            const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + this.current);
            let json = await response.json();
            console.log(json)
            this.setState({buttonDisabled: json["title"]==='No Definitions Found'});
        }
    }

    handleSubmit() {
        this.props.updateGuess(this.current)
        console.log(this.props.guesses.length,this.props.tryNumber)
        if (this.current === this.props.word)
            this.props.endGame("win")
        else if (this.props.guesses.length+1===this.props.tryNumber)
            this.props.endGame("loose")
    }

    render() {
        return (
            <div className="col-1">
                <Words guesses={this.props.guesses}
                       word={this.props.word}
                       onGuessChange={(word) => this.onGuessChange(word)}
                       gameOver ={this.props.gameOver}/>
                <button onClick={() => this.handleSubmit()} disabled={this.state.buttonDisabled || this.props.gameOver === true}>Submit</button>
            </div>)
    }

}

export default GamePlay