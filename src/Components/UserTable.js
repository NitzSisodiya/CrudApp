import React from "react";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { TiPencil } from "react-icons/ti";

function UserTable(props) {
  console.log("table data", props.user);
  return (
    <>
      <div className="container-fluid m-1">
        <nav>
          <div className="container-fluid col-12 " style={{ display: "flex" }}>
            <div className="col-8 m-2" style={{ textAlign: "center" }}>
              <b>
                <u>USER RECORDS</u>
              </b>
            </div>
            <div className="col-2 m-2">
              <Link to="/form" style={{ textDecoration: "none" }}>
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={() => props.isUserEdit(false)}
                >
                  Add User
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="container  col-10">
        <table className="table ">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Contact</th>
              <th>E-mail</th>
              <th>Gender</th>
              <th colSpan="3" style={{ textAlign: "center" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {props.user.map((element, index) => (
              <tr key={index}>
                <td> {element.id} </td>
                <td> {element.name} </td>
                <td>
                  {" "}
                  {element.contact.cc} - {element.contact.num}{" "}
                </td>
                <td> {element.email} </td>
                <td> {element.gender} </td>
                <td>
                  <Link to={{ pathname: `/viewData/${element.id}` }}>
                    <GrView />
                  </Link>
                </td>
                <td>
                  <Link
                    to={{ pathname: `/form/${element.id}` }}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <button
                      type="button"
                      onClick={() => props.isUserEdit(true)}
                    >
                      <TiPencil />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => props.deleteData(element.id)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default UserTable;
