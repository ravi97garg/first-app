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
    console.log("props: ",props);
    this.state = {
        abc:1,
      counter: 0
    }
    // this.getCode = this.getCode.bind(this) //use only if declaring getCode without arrow func. ES5 
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
      <div className="App" style={{margin: '0',}}>
        <Header counter = {this.state.counter}></Header>
        <Main increaseCounter = {this.increaseCounter}></Main>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;