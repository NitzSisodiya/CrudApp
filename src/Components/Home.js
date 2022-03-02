import React from "react";
import { Table } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Form from './form';
import TableHead from './tableHead';
import ViewData from "./viewData";

export default class Index extends React.Component {
constructor(){ 
  super();
  this.state = {
    user: [
      { id: 1, name: 'Alice', contact: 223344, email: 'alice@gmail.com', gender: 'male' },
      { id: 2, name: 'Bob', contact: 223344, email: 'bob@gmail.com', gender: 'male' },
      { id: 3, name: 'Carry', contact: 223344, email: 'carry@gmail.com', gender: 'female' },
      { id: 4, name: 'Denver', contact: 223344, email: 'denver@gmail.com', gender: 'male' },

    ]  
};
}
  render() {
    return (
      <>
        <div className="container-fluid  ">
          <Router>
            <nav className="p-1 Nav Nav-pills">
              <ul style={{ listStyleType: 'none', display: 'inline-flex' }} >
                <li style={{padding:'5px'}}> <Link to='/' style={{ textDecoration: 'none' }} >Home</Link>  </li>
                <li> <Link to='/table' style={{ textDecoration: 'none' }} > User Records</Link> </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/table" element={<TableHead />} />
              <Route path='/form' element={<Form />} />
              <Route path="/table" element={<Table/>} />
               
              <Route  path='/viewData' element={<ViewData />} />
             
             </Routes>
          </Router>
        </div> 
      </>
    );
  }
}