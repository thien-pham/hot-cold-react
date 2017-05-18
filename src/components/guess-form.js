import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {

    onSubmit(e){
        e.preventDefault();
        const capturedText = this.input.value; 
        console.log(capturedText);
        this.props.test(capturedText);
    }
    
    render() {
        return (
                <form onSubmit={e=>{this.onSubmit(e)}}>
                    <input type="text" name="userGuess" id="userGuess"
                        className="text" maxLength="3" autoComplete="off"
                        placeholder="Enter your Guess" required ref={input => this.input=input}/>
                    <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
                </form>
            );
        };
    }
    

