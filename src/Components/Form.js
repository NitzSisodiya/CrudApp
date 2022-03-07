import React from "react";
import { Link } from "react-router-dom";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      contact: "",
      email: "",
      gender: ""
    };
  }

  componentDidMount() {
    this.setState({ id: Number(this.props.users.length) });
  }

  reset = () => {
    this.setState({
      id: this.props.users.length,
      name: "",
      contact: "",
      email: "",
      gender: "",
    });
  };

  handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  handleInputId = () => {
    this.setState({ id: this.state.id + 1 });
    console.log("id:", this.state.id);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact,
      gender: this.state.gender,
    };
    this.props.addFormDataIntoTable(formData);
  };

  render() {
    const { id, name, contact, gender, email,user } = this.state; 
    const {isEdit} = this.props;
    return (
      <>
        <div>
          <div className="container-fluid col-6 bg-info mt-1 p-2 ">
            <div className="container" style={{ textAlign: "center" }}>
               <h1>Fill out the Details</h1>{" "}
            </div>
            <hr></hr>
            <form className="form" onSubmit={this.onFormSubmit}>
              <div className="mb-3 mx-2">
                <label style={{ marginRight: "17px" }}>Name: </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleInput}
                  placeholder="your name"
                  required
                />
              </div>

              <div className = "mb-3 mx-2">
                <label style = {{ marginRight: "7px" }}>Gender: </label>
                <input
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={this.handleInput}
                  placeholder="gender"
                  required
                />
              </div>

              <div className="mb-3 mx-2 ">
                <label style={{ marginRight: "0px" }}>Contact: </label>{" "}
                <input
                  type="Number"
                  name="contact"
                  value={contact}
                  onChange={this.handleInput}
                  placeholder="your contact"
                  required
                />
              </div>

              <div className="mb-3 mx-2">
                <label style={{ marginRight: "17px" }}>E-mail: </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleInput}
                  placeholder="e-mail id"
                  required
                />
              </div>

              <div className="mb-3 mx-2">
                <label style={{ marginRight: "5px" }}>User Id:</label>{" "}
                <input value={id} type="text" disabled />
                <button type="button" onClick={this.handleInputId}>
                  Generate Id
                </button>
              </div>
              <div className="mb-3 mx-2">
              {isEdit ? (
                <>
                  <button
                    type="Submit"
                    onClick={this.handleSubmit}
                    style={{ marginRight: "5px" }}
                  >
                    <Link
                      to="/"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <span>Submit</span>
                    </Link>
                  </button>
                  <button
                    type="button"
                    onClick={this.reset}
                    style={{ marginRight: "5px" }}
                  >
                    Reset
                  </button>                
                </>
              ) : (
                <button
                  type="Submit"
                  onClick={this.handleSubmit}
                  style={{ marginRight: "5px" }}
                >
                  <Link
                    to="/"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <span>Save</span>
                  </Link>
                </button>
              )}
                <Link to="/table"
                 style={{ color: "black", textDecoration: "none" }}
                 >
                  <button type="button">Cancel</button>
                </Link>
                </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
