import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from './components/Table.js';
import SearchBar from './components/SearchBar.js';
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
        <header className="App-header"/>
        <Container>
          <Row className="mt-2 mb-2">
            <Col>
              <SearchBar
                handleInputChange={this.handleInputChange}
                searchTerm={this.state.searchTerm}  
              />
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col>
              <Table data={data} searchTerm={this.state.searchTerm}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  };
}

export default App;
