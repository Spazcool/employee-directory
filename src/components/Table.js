import React from 'react';
import Tables from 'react-bootstrap/Table';
import Row from './Row.js';
import '../App.css';

class Table extends React.Component {
  state = {
    data : this.props.data,
    sorted: {
      col: null,
      dir: 'descending',
    }
  };  

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
// TODO OFFICENUMBER IS STILL BUGGING OUT
    const sortedData = this.state.data.sort((a, b) => {
      if(a[att] === undefined || typeof a[att] === "number"){
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
    const rows = this.state.data.map((datum, index) => (
      <Row key={`${datum.role}-${datum.id}`} datum={datum} index={index} header={false}/>
    ));

    return (
      <Tables striped bordered hover variant="dark">
        <thead>
          <Row
            datum={Object.keys(this.state.data[0])}
            header={true}
            onClick={(event) => this.sortByCol(event)}/>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Tables>
    );
  }
}

export default Table;
