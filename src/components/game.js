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
    }

    updateGuess(e){
        this.setState({guesses: e});
    }


    render(){
    
        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} onSubmit={(e)=>{this.state.updateGuess(e)}}
                    ref={input => this.input=input}/>
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}
