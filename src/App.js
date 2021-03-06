import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from './components/Table.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './App.css';
import data from './data/example.json';

class App extends React.Component{
  state = {
    searchTerm: ""
  };

  handleInputChange = (event) =>{
    this.setState({ searchTerm: event.target.value });
  };

  render(){
    return (
      <div className="App">
        <Header
          handleInputChange={this.handleInputChange}
          searchTerm={this.state.searchTerm}  
        />
        <Container className="wrapper">
          <Row className="mt-2 mb-2">
            <Col>
              <Table data={data} searchTerm={this.state.searchTerm}/>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    )
  };
}

export default App;
