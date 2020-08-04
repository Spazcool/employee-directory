import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {FaSearch} from 'react-icons/fa/';
import '../App.css';

class SearchBar extends React.Component{
  // todo create a handle userinput method in app.js, pass that here, pass app.js state to table
  render(){
    return (
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default"><FaSearch/></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    )
  };
}

export default SearchBar;