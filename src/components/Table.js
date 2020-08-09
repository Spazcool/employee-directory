import React from 'react';
import Tables from 'react-bootstrap/Table';
import Row from './Row.js';
import '../App.css';

class Table extends React.Component {
  state = {
    data : this.props.data,
    sorted: {
      col: 'id',
      dir: 'ascending',
    }
  };  

  sortByCol(col){
    let att = col.toLowerCase();
    const dir = this.state.sorted.col 
      ? (this.state.sorted.dir === 'ascending' ? 'descending' : 'ascending')
      : 'descending';

    const sortedData = this.state.data.sort((a, b) => {
      if(a[att] === null || typeof a[att] === "number"){
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

  includesTerm(obj, term){
    if(term.length < 1) return true;
    let included = false;
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      if(obj[key] !== null && obj[key].toString().includes(term)){
        included = true;
      }
    })
    return included;
  }

  filterByTerm(term){
    return this.state.data
      .filter((row) => this.includesTerm(row, term))
      .map((datum, index) => (
        <Row key={`${datum.role}-${datum.id}`} datum={datum} index={index} header={false} term={term}/>
      ));
  }

  render(){
    const rows = this.filterByTerm(this.props.searchTerm);

    return (
      <Tables striped bordered hover variant="dark">
        <thead>
          <Row
            datum={Object.keys(this.state.data[0])}
            sortBy={this.state.sorted.col}
            sortDir={this.state.sorted.dir}
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
