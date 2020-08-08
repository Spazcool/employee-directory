import React from 'react';
import {FaReact} from 'react-icons/fa/';
import '../App.css';

class Header extends React.Component{
  render(){
    return(
      <nav className="App-header">
        <span><FaReact className="App-logo"/> Employee Directory</span>
      </nav>
    )
  }
}

export default Header;


