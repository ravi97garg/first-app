import React, { Component } from 'react';
import './Main.css';

class Main extends Component{
    render(){
        return (
            <div className = "main">
            <p>
                This is a counter implemented using React framework. Click the button 
                below to increase counter value by one
            </p>
            <button onClick={this.props.increaseCounter}>Increase Counter</button>
            </div>
        )
    }
}
export default Main;