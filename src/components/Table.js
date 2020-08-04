import React from 'react';
import Tables from 'react-bootstrap/Table';
import '../App.css';

class Table extends React.Component {
  state = {
    data : this.props.data,
    sorted: {
      col: null,
      dir: 'descending',
    }
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
    const listed = list.map((item) => (<th key={`${item}-header`}>{item.toUpperCase()}</th>));
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

    const dir = this.state.sorted.col 
      ? (this.state.sorted.dir === 'ascending' ? 'descending' : 'ascending')
      : 'descending';

    const sortedData = this.state.data.sort((a, b) => {
      if(att === 'id' || att === 'officenumber'){
        return (a[att] > b[att]) ? 1 : - 1;
      }else{
        return (a[att].toLowerCase() > b[att].toLowerCase()) ? 1 : - 1
      }
    });

    if(dir === 'descending'){
      sortedData.reverse();
    }
    
    this.setState({
      data: sortedData,
      sorted: {
        col: att,
        dir
      }
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
