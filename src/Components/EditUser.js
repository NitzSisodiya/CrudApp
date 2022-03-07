import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default class EditData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Number(window.location.pathname.split("/").slice(-1)[0]),
      name: "name",
      contact: "contact",
      email: "email",
      gender: "gender",
    };
  }

  componentDidMount() {
    this.props.data
      .filter((items, index) => items.id === this.state.id)
      .map((item) => this.setState(item));
  }

  makeChanges = () => {
    const editedData = [{ ...this.state }];
    console.log("eg", editedData);
    this.props.editUserInfo(editedData);
  };

  handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    return (
      <>
        <div>
          <div className=" container col-10  bg-dark">
            <Card style={{ width: "auto", height: "auto" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  {" "}
                  <u> User Records </u>{" "}
                </Card.Title>
                <Card.Text>
                  <div>
                    <ul style={{ listStyleType : 'none'}} >
                      <li>
                        id :{" "}
                        <input
                          style={{ marginBottom: "5px" }}
                          type="Number"
                          value={this.state.id}
                          name="id"
                        />
                      </li>

                      <li>
                        Name :
                        <input
                          style={{ marginBottom: "5px" }}
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        E-mail:
                        <input
                          value={this.state.email}
                          style={{ marginBottom: "5px" }}
                          type="email"
                          name="email"
                          onChange={this.handleInput}
                        ></input>
                      </li>

                      <li>
                        Contact:
                        <input
                          value={this.state.contact}
                          style={{ marginBottom: "5px" }}
                          type="number"
                          name="contact"
                          onChange={this.handleInput}
                        ></input>
                      </li>

                      <li>
                        gender:
                        <input
                          value={this.state.gender}
                          style={{ marginBottom: "5px" }}
                          type="text"
                          name="gender"
                          onChange={this.handleInput}
                        ></input>
                      </li>
                    </ul>
                    <button type="button" onClick={this.makeChanges}>
                      <Link
                        to="/"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Make changes
                      </Link>
                    </button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    );
  }
}
