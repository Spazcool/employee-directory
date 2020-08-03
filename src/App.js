import React from 'react';
import Table from './components/Table.js';
import './App.css';
import data from './data/example.json';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <header className="App-header"/>
      <Table data={data}/>
    </div>
  )};
}

export default App;
