import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {FaSearch} from 'react-icons/fa/';
import '../App.css';

class SearchBar extends React.Component{
  render(){
    return (
      <InputGroup className="mb-3 search">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default"><FaSearch/></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={this.props.searchTerm}
          onChange={this.props.handleInputChange}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    )
  };
}

export default SearchBar;