import React from 'react';
import Tables from 'react-bootstrap/Table';
import '../App.css';

class Table extends React.Component {
  createRow(data){
    return (  
    <tr key={`${data.role}-${data.id}`}>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.role}</td>
      <td>{data.email}</td>
      <td>{data.officeNumber}</td>
      <td>{data.github}</td>
      <td>{data.school}</td>
    </tr>
    )
  }

  render(){
    const data = this.props.data;
    console.log(data)
    const rows = data.map((datum) => this.createRow(datum))

    return (
      <div className="App">
        <header className="App-header"/>
        
        <Tables striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Office #</th>
              <th>Github Account</th>
              <th>School</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Tables>
      </div>
    );
  }
}

export default Table;
