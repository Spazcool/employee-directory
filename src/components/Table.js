import React from 'react';
import Tables from 'react-bootstrap/Table';
import '../App.css';

class Table extends React.Component {
  state = {
    data : this.props.data,
    sorted: ''
  };  
  
  createRow(datum, index){
    const att = Object.keys(datum);
    const cells = att.map((cell) => (
      <td key={`${cell}-cell-${index}`}>{datum[cell] === undefined ? 'X' : datum[cell]}</td>
    ));

    return (  
      <tr key={`${datum.role}-${datum.id}`}>
        {cells}
      </tr>
    )
  }

  createHeader(list){
    const listed = list.map((item) => (<th key={`${item}-header`}>{item}</th>));
    return (
      <tr onClick={(event) => this.sortByCol(event.target.closest('th').innerText)}>
       {listed}
      </tr>
    )
  }

  sortByCol(col){
    let att;
    switch(col){
      case 'Office #':
        att = 'officeNumber';
        break;
      case 'Github Account':
        att = 'github';
        break;
      default:
        att = col.toLowerCase();
    }
    //todo this is broken
    const sorted = this.state.data === this.state.data.sort((a, b) => (a[att] > b[att]) ? 1 : - 1)
      ? this.state.data.sort((a, b) => (a[att] < b[att]) ? 1 : + 1)
      : this.state.data.sort((a, b) => (a[att] > b[att]) ? 1 : - 1);
    console.log(sorted)
    this.setState({
      data: sorted
    });
  }

  render(){
    //todo rows & headers are independend, if data comes in that is messy, the table will suck
    const rows = this.state.data.map((datum, index) => this.createRow(datum, index));
    const headers = this.createHeader(Object.keys(this.state.data[0]));

    return (
      <Tables striped bordered hover variant="dark">
        <thead>
          {headers}
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Tables>
    );
  }
}

export default Table;
