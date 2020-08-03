import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from './components/Table.js';
import './App.css';
import data from './data/example.json';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header"/>
        <Container>
          <Table data={data}/>
        </Container>
      </div>
    )
  };
}

export default App;
