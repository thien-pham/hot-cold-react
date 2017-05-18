import React from 'react';

import './guess-section.css';

export default class GuessSection extends React.Component {


    render() {
    return (
        <section>
            <h2 id="feedback">{this.props.feedback}</h2>
            
    
            <form >    
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required ref={input => this.input=input} 
                    />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"
                onSubmit={this.props.onChangeValue}/>
            </form>

        </section>
    );
    }
}

