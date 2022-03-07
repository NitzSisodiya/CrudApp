import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Form from "./Form";
import ViewData from "./ViewData";
import Table from "./UserTable";
import EditData from "./EditUser";

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      isEdit:true,
      user: [
        {
          id: 1,
          name: "Alice",
          contact: 223344,
          email: "alice@gmail.com",
          gender: "male",
        },
        {
          id: 2,
          name: "Bob",
          contact: 223344,
          email: "bob@gmail.com",
          gender: "male",
        },
        {
          id: 3,
          name: "Carry",
          contact: 223344,
          email: "carry@gmail.com",
          gender: "female",
        },
        {
          id: 4,
          name: "Denver",
          contact: 223344,
          email: "denver@gmail.com",
          gender: "male",
        },
      ],
    };
  }

  editUserInfo = (editedData) => {
    const userEdit = Object.assign(...this.state.user, ...editedData);
  };

  addFormDataIntoTable = (formData) => {
    const usersRef = this.state.user;
    usersRef.push(formData);
    this.setState({ user: usersRef });
  };

  deleteData = (id) => {
    const newUser = this.state.user;
    const indexForDelete = newUser.findIndex((item) => item.id === id);
    newUser.splice(indexForDelete, 1);
    this.setState({ user: newUser });
  };

  isEditFun = () => {
    this.setState({isEdit:false})
    console.log("edit i ",this.state.isEdit)
    
}
  
  render() {
    console.log("data", this.state.user);
    return (
      <>
        <div className="container-fluid  ">
          <Router>
            <nav className="p-1 Nav Nav-pills">
              <ul style={{ listStyleType: "none", display: "inline-flex" }}>
                <li style={{ padding: "5px" }}>
                  {" "}
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>{" "}
                </li>
                {/* <li style={{ padding: "5px" }}>
                  {" "}
                  <Link to="/table" style={{ textDecoration: "none" }}>
                    {" "}
                    UserRecords
                  </Link>{" "}
                </li> */}
              </ul>
            </nav>
            <Routes>
              <Route
                path="/form"
                element={
                  <Form
                    addFormDataIntoTable={this.addFormDataIntoTable}
                    users={this.state.user}
                    isEdit={this.isEdit}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <Table 
                  deleteData={this.deleteData} 
                  users={this.state.user} 
                  isEditFun ={this.isEditFun}
                  />
                }
              />
              <Route
                path="/viewData/:id"
                element={<ViewData data={this.state.user} />}
              />
              <Route
                path="/editData/:id"
                element={
                  <EditData
                    data={this.state.user}
                    editUserInfo={this.editUserInfo}
                  />
                }
              />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
