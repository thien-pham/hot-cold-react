import React from 'react';

import './guess-section.css';

export default class GuessSection extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let value = this.input.value;
        console.log('hi' + value);
        this.props.handleSubmit(value);
    }

    render() {
    return (
        <section>
            <h2 id="feedback">{this.props.feedback}</h2>
            
    
            <form onSubmit={e=>this.handleSubmit(e)}>    
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required ref={input => this.input=input} 
                    />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"
                />
            </form>

        </section>
    );
    }
}

