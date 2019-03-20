import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <header>
                <h3>Counter</h3>
                <p>{this.props.counter}</p>
            </header>
        )
    }
}
export default Header;