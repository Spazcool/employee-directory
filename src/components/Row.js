import React from 'react';
import '../App.css';

class Row extends React.Component{
  createRow(datum, index){
    const att = Object.keys(datum);
    const cells = att.map((cell) => (
      <td key={`${cell}-cell-${index}`}>{datum[cell] === undefined ? 'X' : datum[cell]}</td>
    ));

    return (  
      <tr>
        {cells}
      </tr>
    )
  }

  createHeader(list){
    const cells = list.map((item) => (<th key={`${item}-header`}>{item.toUpperCase()}</th>));

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
    return (this.createRow(this.props.datum, this.props.index))
  };
}

export default Row;