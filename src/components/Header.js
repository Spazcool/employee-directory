import React from 'react';
import {FaReact} from 'react-icons/fa/';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from './SearchBar.js';
import '../App.css';

class Header extends React.Component{
  render(){
    return(        
        <Container fluid className="App-header">
          <Row className="mb-2">
            <Col >
              <nav >
                <span ><FaReact className="App-logo"/> Employee Directory</span>
              </nav>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <SearchBar
                handleInputChange={this.props.handleInputChange}
                searchTerm={this.props.searchTerm}  
              />
            </Col>
        </Row>
      </Container>
    )
  }
}

export default Header;


