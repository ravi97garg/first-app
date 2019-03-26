import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Aside from './components/Aside';

// const Aside = require('./components/Aside');
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        abc:1,
      counter: 0
    }
    // this.getCodestyle={{margin: '0',}} = this.getCode.bind(this) //use only if declaring getCode without arrow func. ES5
  }
  // getCode(value){
  //   console.log("Value received from child 'Header'",value);
  //   console.log(this)
  //   this.setState({
  //     name: "ttn",
  //     code: value
  //   });
  //   console.log("Success");
  // }

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter+1
    }, ()=>{
        console.log("App state:", this.state);
    });
    //   this.state.counter = this.state.counter+1;
    //   this.forceUpdate();
  }


  render() {
    return (
      <div className="App">
        <Header counter = {this.state.counter}/>
        <div className='content'>
            <Main increaseCounter = {this.increaseCounter}/>
            <Aside></Aside>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;