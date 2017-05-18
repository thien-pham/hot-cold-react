import React from 'react';

import './guess-section.css';

export default class GuessSection extends React.Component {

    onSubmit(e) {
        e.preventDefault();
        const capturedText = this.input.value; 
        // console.log(capturedText);
        return capturedText;
    }

    render() {
    return (
        <section>
            <h2 id="feedback">{this.props.feedback}</h2>
            
            {/*<form onSubmit={e=>{this.onSubmit(e)}}>*/}
            <form onSubmit={(e) => this.onSubmit(e)}>    
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required ref={input => this.input=input}/>
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>

        </section>
    );
    }
}

