import React, { Component } from 'react';

class Game extends Component {
    constructor(props){
        super(props);

        this.state = {
            randomNumber: '',
            userGuess: '',
        };

        this.handleInput= this.handleInput.bind(this); 

    }

    handleInput(event){
        const value= event.target.value;
        const {userGuess}= this.state; 

        this.setState({
            userGuess: value
        })
    }
    randomNumberCreator(){

    }

    reset(){
        this.setState({
            randomNumber: '',
            userGuess: ''
        });
    }
    render(){
        return(
            <div>
                <h1 className="text-center my-3">Guessing Game</h1>
                <form>
                    <p value={this.state.userGuess}></p>
                    <input value={this.state.userGuess} onChange={this.handleInput}/>
                    <button onClick={this.reset}>Reset</button>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Game;
