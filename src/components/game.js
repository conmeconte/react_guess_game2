import React, { Component } from 'react';

class Game extends Component {
    constructor(props){
        super(props);

        this.state = {
            randomNumber: 0,
            userNumber: ''
        };

        this.handleInput= this.handleInput.bind(this); 

    }

    componentDidMount(){
        this.generateRandomNumber(); 
    }

    handleInput(event){
        // console.log(event.target.value);
        const value= event.target.value;
        const {userNumber}= this.state; 

        this.setState({
            userNumber: value
        });
    }

    makeGuess(event){
        event.preventDefault(); 
        console.log('User Guess', this.state.userNumber); 
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
        const {randomNumber, userNumber} = this.state;
        const btnStyle={
            margin: '10px 5px'
        };

        return(
            <div>
                
                    <p>Random Number: {randomNumber}</p>
                    <div className='row'>
                        <form className='col s6 offset-s3' onSubmit={this.makeGuess.bind(this)}>
                            <div className='row'>
                                <div className='input-field'>
                                    {/* <input type='number' placeholder='input numbers' value={userNumber} onChange={event=>{this.setState({userNumber: event.target.value})}}/> */}
                                    <input className='center-align' type='number' placeholder='input numbers' value={userNumber} onChange={this.handleInput.bind(this)}/>
                                </div>
                            </div>
                            <div className='row center-align'>
                                <button style={btnStyle} className='btn green darken-2'>Guess</button>
                                <button style={btnStyle} type='button' className="btn red darken-2" onClick={this.resetGame.bind(this)}>Reset</button>
                            </div>
                        </form>
                    </div>
            </div>
        )
    }
}

export default Game;
