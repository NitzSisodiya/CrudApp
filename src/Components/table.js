import React from "react";
import { Link} from 'react-router-dom';
import { GrView } from 'react-icons/gr';
import { MdDelete } from "react-icons/md";
import { TiPencil } from "react-icons/ti";



export default class Table extends React.Component {
  state =
    {
      user: [
        { id: 1, name: 'Alice', contact: 223344, email: 'alice@gmail.com', gender: 'male' },
        { id: 2, name: 'Bob', contact: 223344, email: 'bob@gmail.com', gender: 'male' },
        { id: 3, name: 'Carry', contact: 223344, email: 'carry@gmail.com', gender: 'female' },
        { id: 4, name: 'Denver', contact: 223344, email: 'denver@gmail.com', gender: 'male' },

      ]
    };

  render() {
    return (
      <>


        <div className="container bg-lightblue">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Contact</th>
                <th>E-mail</th>
                <th>Gender</th>
                <th collspan='3' >Actions</th>
              </tr></thead>
            <tbody>
              {this.state.user.map((element, index) => (
                <tr>
                  <td key={element.id} >  {element.id} </td>
                  <td key={element.name} > {element.name} </td>
                  <td key={element.contact} > {element.contact} </td>
                  <td key={element.email} > {element.email} </td>
                  <td key={element.gender} > {element.gender} </td>

                  <td>  <Link to={{pathname:`/viewData/${element.id}`, data:element}} > <button type="button" ><GrView /></button></Link></td>

                  <td>
                    <button type="button">
                    <TiPencil/>
                    </button>
                  </td>
                  <td> <button type="button">
                  <MdDelete/>
                  </button> </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </>
    );
  }

}

