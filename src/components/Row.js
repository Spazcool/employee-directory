import React from 'react';
import '../App.css';
import {GoTriangleUp, GoTriangleDown} from 'react-icons/go/';


class Row extends React.Component{
  createRow(datum, index, term){
    const att = Object.keys(datum);
    const cells = att.map((cell) => (
      <td key={`${cell}-cell-${index}`}>{datum[cell] === undefined ? 'X' : this.highlightText(datum[cell], term)}</td>
    ));

    return (  
      <tr>
        {cells}
      </tr>
    )
  }

  highlightText(text, highlight){
    console.log(highlight)
    return text;
  }

  displayArrow(){
    return this.props.sortDir === 'ascending' ? <GoTriangleUp/> : <GoTriangleDown/>;
  }

  createHeader(list){
    const cells = list.map((item) => (
      <th key={`${item}-header`}>
        {item.toUpperCase()}
        {item === this.props.sortBy ? this.displayArrow() : ''}
      </th>
    ));

    return (
      <tr onClick={(event) => this.props.onClick(event.target.closest('th').innerText)}>
       {cells}
      </tr>
    )
  }
  
  render(){
    if(this.props.header){
      return (this.createHeader(this.props.datum))
    }
    return (this.createRow(this.props.datum, this.props.index, this.props.term))
  };
}

export default Row;