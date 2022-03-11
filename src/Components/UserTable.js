import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { TiPencil } from "react-icons/ti";

function UserTable({
  user,
  isUserEdit,
  deleteData,
}) {
  const [posts, setPost] = useState([])
    useEffect(() => {
     axios.get('https://api.stackexchange.com/2.3/posts?order=desc&sort=activity&site=stackoverflow')
      .then((response) => {
        if (response && response.data) {
          const postsData = response.data.items;
        setPost(postsData)
        }
      })
  }, [])


    useEffect(() => {
      if (posts.length !== 0) console.log('posts updated')

    }, [posts])

  console.log("table data", user);
  console.log('posts', posts)

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
                  onClick={() => isUserEdit(false)}
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
            {user.map((element, index) => (
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
                      <TiPencil  onClick={() => isUserEdit(true)}/>
                 
                  </Link>
                </td>
                <td>
                 
                    <MdDelete  onClick={() => deleteData(element.id)} />
                 
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
