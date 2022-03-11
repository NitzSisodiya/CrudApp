import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Form from "./Form";
import ViewData from "./ViewData";
import UserTable from "./UserTable";

function Routers(props) {
  return (
    <div className="container-fluid  ">
      {/* const {addFormDataIntoTable, isEdit, user, isUserEdit, deleteData, editUserInfo } = props;  */}
      <Router>
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
                addFormDataIntoTable={props.addFormDataIntoTable}
                user={props.user}
                isEdit={props.isEdit}
              />
            }
          />
          <Route
            path="/"
            element={
              <UserTable
                deleteData={props.deleteData}
                user={props.user}
                isUserEdit={props.isUserEdit}
              />
            }
          />
          <Route
            path="/viewData/:id"
            element={<ViewData user={props.user} />}
          />
          <Route
            path="/form/:id"
            element={
              <Form
                user={props.user}
                editUserInfo={props.editUserInfo}
                isEdit={props.isEdit}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Routers;
