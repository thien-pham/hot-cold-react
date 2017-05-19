import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
      
        this.state=({
            guesses: [],
            feedback: 'Make your guess!',
            answer: Math.floor(Math.random() * 100) + 1 
        })
        this.updateGuess = this.updateGuess.bind(this);
    }
    
    updateGuess(guess) {
        let feedback;
        const difference = Math.abs(guess - this.state.answer);
        
        if(guess === this.state.answer){
            feedback='You won! Click new game to play again'
        }
        else if(difference <= 10){
            feedback='hot';
        }
        else if (difference <= 25){
            feedback='warm';
        }
        else {
            feedback='cold';
        }
        

        console.log(guess, 'testing');
        this.setState({feedback, guesses:[...this.state.guesses, guess]
        });
    }

    render(){
    
        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} test={this.updateGuess}
                              handleSubmit={guess=>this.updateGuess(guess)}  />
                    
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}
