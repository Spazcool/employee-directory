import React from 'react';
import {FaCode, FaHeart} from 'react-icons/fa/';
import '../App.css';

class Footer extends React.Component{
  render(){
    return(
      <footer className="footer">
        <div className="container">
          <span className="text-muted">
            <FaCode className="flip"/> with <FaHeart className="flip"/> by <a href="http://www.spazcool.com">Douglas Wright</a>
          </span>
        </div>
      </footer>
    )
  }
}

export default Footer;