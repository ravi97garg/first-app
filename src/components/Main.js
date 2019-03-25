import React, { Component } from 'react';
import './Main.css';

class Main extends Component{
    state={
      name:'',
      password:''
    };

    getInputValue = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    };

    render(){
        return (
            <div className = "main">
            <p>
                This is a counter implemented using React framework. Click the button 
                below to increase counter value by one
            </p>
                <p>{this.state.name}{this.state.password}</p>
            <button onClick={this.props.increaseCounter}>Increase Counter</button>
                <input name="name" onChange={this.getInputValue}/>
                <input name="password" onChange={this.getInputValue}/>
            </div>
        )
    }
}
export default Main;