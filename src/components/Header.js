import React, {Component} from 'react';
import './Header.css';
import logo from '../logo.svg'

class Header extends Component{
    render(){
        return(
            <header className='clearfix'>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>react projects</h1>
                <div className='counter'>
                    <h3>Counter</h3>
                    <p>{this.props.counter}</p>
                </div>
            </header>
        )
    }
}
export default Header;