import React, { Component } from 'react';

class Game extends Component {
    constructor(props){
        super(props);

        this.state = {
            randomNumber: 0,
            userGuess: '',
        };

        this.handleInput= this.handleInput.bind(this); 

    }

    componentDidMount(){
        this.generateRandomNumber(); 
    }

    handleInput(event){
        const value= event.target.value;
        const {userGuess}= this.state; 

        this.setState({
            userGuess: value
        })
    }
    generateRandomNumber(){
        const randNum = Math.floor(Math.random()* 10) + 1; 

        this.setState({
            randomNumber: randNum
        });
    }

    resetGame(){
        this.generateRandomNumber(); 
    }
    render(){
    
        // console.log('State: ', this.state); 

        return(
            <div>
                    <p>Random Number: {this.state.randomNumber}</p>
                    <input value={this.state.userGuess} onChange={this.handleInput}/>
                    <button className="btn red darken-2" onClick={this.resetGame.bind(this)}>Reset</button>
                    <button>Submit</button>
            </div>
        )
    }
}

export default Game;
