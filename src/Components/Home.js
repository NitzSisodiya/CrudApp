import React from "react";
import { BrowserRouter as Router,  Routes, Route, Link } from "react-router-dom";

import Form from "./Form";
import ViewData from "./ViewData";
import Table from "./UserTable";
import { MdChangeCircle } from "react-icons/md";

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      isEdit: false,
      user: [
        {
          id: 1,
          name: "Alice",
          contact: { cc: -91, num: 223344 },
          email: "alice@gmail.com",
          gender: "male",
        },
        {
          id: 2,
          name: "Bob",
          contact: { cc: -91, num: 223344 },
          email: "bob@gmail.com",
          gender: "male",
        },
        {
          id: 3,
          name: "Carry",
          contact: { cc: -91, num: 223344 },
          email: "carry@gmail.com",
          gender: "female",
        },
        {
          id: 4,
          name: "Denver",
          contact: { cc: -91, num: 223344 },
          email: "denver@gmail.com",
          gender: "male",
        },
      ],
    };
  }

  editUserInfo = (editedData) => {
    // const edt = [];
    // this.state.user.map((user) =>
    //   user.id === editedData[0].id ? edt.push(editedData[0]) : edt.push(user)
    // );
    const userBeforeEdit = this.state.user.find(user =>user.id===editedData[0].id )
    
    editStateUser(userBeforeEdit);    
 
   function editStateUser(userAfterEdit){
    if(userAfterEdit.name!==editedData[0].name)
    userAfterEdit.name =userAfterEdit.name.replace(userAfterEdit.name,editedData[0].name)
    console.log("updatedField",userAfterEdit.name)
    
    if(userAfterEdit.email!==editedData[0].email)
    userAfterEdit.email =userAfterEdit.email.replace(userAfterEdit.email,editedData[0].email)
    console.log("updatedField",userAfterEdit.email)
    
    if(userAfterEdit.contact.num!==editedData[0].contact.num)
    userAfterEdit.contact.num =userAfterEdit.contact.num.replace(userAfterEdit.contact.num,editedData[0].contact.num)
    console.log("updatedField",userAfterEdit.contact.num)
  
    if(userAfterEdit.gender!==editedData[0].gender)
    userAfterEdit.gender =userAfterEdit.gender.replace(userAfterEdit.gender,editedData[0].gender)
    console.log("updatedField",userAfterEdit.gender)
  }
   // u.replace(u.name,editedData[0].name)
  //   console.log("name",editedData[0].name)
    // this.setState({ user: edt });
  };
  
  addFormDataIntoTable = (formData) => {
    const usersRef = this.state.user;
    usersRef.push(formData);
    this.setState({ user: usersRef });
  };

  deleteData = (id) => {
    const newUser = [...this.state.user];
    const indexForDelete = newUser.findIndex((item) => item.id === id);
    newUser.splice(indexForDelete, 1);
    this.setState({ user: newUser });
  };

  isUserEdit = (check) => {
    this.setState({ isEdit: check });
  };

  render() {
    const { user, isEdit } = this.state;
    return (
      <div className="container-fluid  ">
        <Router  >
          <nav className="p-1 Nav Nav-pills">
            <ul style={{ listStyleType: "none", display: "inline-flex" }}>
              <li style={{ padding: "5px" }}>
                {" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  Home
                </Link>{" "}
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/form"
              element={
                <Form
                  addFormDataIntoTable={this.addFormDataIntoTable}
                  user={user}
                  isEdit={isEdit}
                />
              }
            />
            <Route
              path="/"
              element={
                <Table
                  deleteData={this.deleteData}
                  user={user}
                  isUserEdit={this.isUserEdit}
                />
              }
            />
            <Route path="/viewData/:id" element={<ViewData user={user} />} />
            <Route
              path="/form/:id"
              element={
                <Form
                  user={user}
                  editUserInfo={this.editUserInfo}
                  isEdit={isEdit}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
