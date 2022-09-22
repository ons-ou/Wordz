import React from 'react';
import Letter from './Letter'
import './components.css';

function Word(props) {
    let letter = []
    let color
    let word = props.word
    let wordToGuess = props.wordToGuess
    for (let i = 0; i < word.length; i++) {
    if (word[i]===wordToGuess[i])
        color = "green"
    else if (wordToGuess.includes(word[i])){
        if (wordToGuess.split(word[i]).length === 1 )
            color = "yellow"
        else {
            let s = word.slice(0, i)
            if (s.split(word[i]).length !== wordToGuess.split(word[i]).length && word[wordToGuess.indexOf(word[i])]!==word[i])
                color = "yellow"
            else
                color = "red"
        }
    }
    else
        color = "red"

        letter.push(<Letter
            key={props.tryNumber * 10 + i}
            number = {i}
            value={props.word[i]}
            word = {props.wordToGuess}
            color = {color}
        />)
    }
    return (<div className={"word"}>
        {letter}
    </div>)

}

export default Word;