import React from 'react';

import NumberInput from './number-input';
import Feedback from './feedback';
import PriorGuesses from './prior-guesses';
import SubmitButton from './submit-button.js';

export default class GuessInterface extends React.Component {
    constructor(props) {
        super(props);

        function generateRandom() {
            const random = Math.floor(Math.random() * 100) + 1;
            return random;
        };

        const randomNumber = generateRandom();

        this.state = {
            currentNumber: randomNumber,
            priorGuesses: [],
            currentFeedback: '',
            currentGuess: 0
        }
    }

    updateCurrentGuess(guess) {
        this.setState({
            currentGuess: guess
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        NumberInput.value = '';
        if (this.state.currentGuess + 5 === this.state.currentNumber || this.state.currentGuess - 5 === this.state.currentNumber) {
            this.setState({
                currentFeedback: "hot"
            });
            this.state.priorGuesses.push(this.state.currentGuess);
        } else if (this.state.currentGuess === this.state.currentNumber) {
            this.setState({
                currentFeedback: "You guessed it!"
            });
            this.forceUpdate();
        } else {
            this.setState({
                currentFeedback: "cold"
            })
        }
    }

    render() {
        return (
            <form>
                <h1>Hot or Cold</h1>
                <h2>Current number is {this.state.currentNumber}</h2>
                <Feedback id="feedback">
                    {this.state.currentFeedback}
                </Feedback>
                <NumberInput id="guess-field" min={1} max={100} 
                onChange={e => this.updateCurrentGuess(e.target.value)}
                />
                <SubmitButton onClick={e => this.handleSubmit(e)}>
                </SubmitButton>
                <PriorGuesses>
                    {this.state.priorGuesses}
                </PriorGuesses>
            </form>
        )
    }

}