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
    const _highlight = highlight;
    const _text = text === null ? '' : text.toString();
    const start = _text.indexOf(_highlight);
    let highlighted;

    if(start !== -1 && highlight.length > 0){
      let finish = start + _highlight.length;
      let beginning = _text.substring(0, start);
      let middle = _text.substring(start, finish);
      let end = _text.substring(finish, _text.length);
      
      highlighted = 
        <span>
          <span>{beginning}</span>
          <span className='highlighted'>{middle}</span>
          <span>{end}</span>
        </span>;
    }else{
      highlighted = text;
    }
  
    return highlighted;
  }

  displayArrow(){
    return this.props.sortDir === 'ascending' ? <GoTriangleUp/> : <GoTriangleDown/>;
  }

  createHeader(list){
    const cells = list.map((item) => (
      <th key={`${item}-header`} className="hovered">
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