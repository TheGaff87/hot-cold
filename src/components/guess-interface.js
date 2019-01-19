import React from 'react';

import NumberInput from './number-input';
import Feedback from './feedback';
import PriorGuesses from './prior-guesses';
import SubmitButton from './submit-button.js';
import NewGame from './new-game.js';

export default class GuessInterface extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentNumber: 0,
            priorGuesses: [],
            currentFeedback: '',
            currentGuess: ''
        }
    }

    componentDidMount() {
        this.generateRandom()
    }

    updateCurrentGuess(guess) {
        this.setState({
            currentGuess: guess
        })
    }

    generateRandom() {
        const random = Math.floor(Math.random() * 100) + 1;
        this.setState({
            currentNumber: random
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            currentGuess: ''
        })
        if ((this.state.currentGuess - this.state.currentNumber <= 5 && this.state.currentGuess - this.state.currentNumber >= 1) || (this.state.currentNumber - this.state.currentGuess <= 5 && this.state.currentNumber - this.state.currentGuess >= 1)) {
            this.setState({
                currentFeedback: "hot"
            });
        } else if (this.state.currentGuess === this.state.currentNumber) {
            this.setState({
                currentFeedback: "You guessed it!"
            })
            setTimeout(
                function() {
                    this.restartGame();
                }.bind(this), 5000)
        } else {
            this.setState({
                currentFeedback: "cold"
            })
        }
        this.state.priorGuesses.push(this.state.currentGuess + ' ');
    }

    restartGame() {
        this.generateRandom();
        this.setState({
            currentFeedback: ''
        })
        this.setState({
            priorGuesses: []
        })
    }

    render() {
        return (
            <form>
                <h1>Hot or Cold Guessing Game</h1>
                <h2>Make a guess!</h2>
                <Feedback id='feedback' text={this.state.currentFeedback}>
                </Feedback>
                <NumberInput id='guess-field' min={1} max={100} value={this.state.currentGuess}
                onChange={e => this.updateCurrentGuess(parseInt(e.target.value))}
                />
                <SubmitButton onClick={e => this.handleSubmit(e)}>
                </SubmitButton>
                <h3>Prior Guesses</h3>
                <PriorGuesses guesses={this.state.priorGuesses}>
                </PriorGuesses>
                <NewGame onClick={e => this.restartGame(e)}></NewGame>
            </form>
        )
    }

}