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
            count: 0
        })
        this.updateGuess = this.updateGuess.bind(this);
    }
    
    updateGuess(e) {
        e.preventDefault();
        console.log(e.target.value, 'testing');
        this.setState({guesses:[...this.state.guesses, e.target.value]
        });
    }

    render(){
    
        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} test={this.updateGuess}
                              onChangeValue={this.updateGuess}  />
                    
                <GuessCount count={this.state.count} />
                {/*<GuessList guesses={this.state.guesses} />*/}
            </div>
        );
    }
}
