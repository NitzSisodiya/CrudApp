import React from "react";
import { Link } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: "",
      contact: "",
      email: "",
      gender: "",
      errors: "",
    };
  }

  componentDidMount() {
    if (this.props.isEdit === false) {
      this.setState({ id: Number(this.props.users.length) });
    } else {
      const userId = Number(window.location.pathname.split("/").slice(-1)[0]);
      this.setState({
        id: userId,
      });
      const userData = this.props.users.find(
        (user, index) => user.id === userId
      );
      this.setState({
        id: userId,
        name: userData.name,
        contact: userData.contact,
        email: userData.email,
        gender: userData.gender,
      });
    }
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

  editedUser = () => {
    const editedData = [{ ...this.state }];
    console.log("edited data", editedData);
    this.props.editUserInfo(editedData);
  };

  handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
    debugger;
    this.validate(event, name, value);

    this.setState({
      [name]: value,
    });
  };

  handleInputId = () => {
    this.setState({ id: this.state.id + 1 });
    console.log("id:", this.state.id);
  };

  handleSubmit = (event) => {
    const { id, name, contact, gender, email } = this.state;
    event.preventDefault();
    const formData = {
      id: id,
      name: name,
      email: email,
      contact: contact,
      gender: gender,
    };
    this.props.addFormDataIntoTable(formData);
  };

  //  validate = (event, name, value) => {
  //     //A function to validate each input values

  //     switch (name) {
  //         case "name":
  //             if(value.length <= 4){
  //                 // we will set the error state

  //                 this.setState({
  //                     ...this.state.errors,
  //                     name:'name atleast have 5 letters'
  //                 })
  //             }else{
  //                 // set the error state empty or remove the error for username input

  //                 //omit function removes/omits the value from given object and returns a new object
  //                 let newObj = omit(this.state.errors, "name");
  //                  this.setState(newObj);

  //             }
  //             break;

  //         case "email":
  //             if(
  //                 !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
  //             ){
  //                  this.setState({
  //                     ...this.state.errors,
  //                     email:'Enter a valid email address'
  //                 })
  //             }else{

  //                 let newObj = omit(this.state.errors, "email");
  //                  this.setState(newObj);

  //             }
  //         break;

  //         // case 'password':
  //         //     if(
  //         //         !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
  //         //     ){
  //         //          this.setState({
  //         //             ...this.this.state.errors,
  //         //             password:'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
  //         //         })
  //         //     }else{

  //         //         let newObj = omit(this.this.state.errors, "password");
  //         //          this.setState(newObj);

  //         //     }
  //         // break;

  //         default:
  //             break;
  //     }
  // }

  render() {
    const { id, name, contact, gender, email } = this.state;
    return (
      <>
        <div>
          <div className="container-fluid col-6 bg-info mt-1 p-2 ">
            <div className="container" style={{ textAlign: "center" }}>
              {!this.props.isEdit ? <h1> Add User </h1> : <h1> Edit User </h1>}
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

              <div className="mb-3 mx-2">
                <label style={{ marginRight: "7px" }}>Gender: </label>
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
                <button
                  id="generateBtn"
                  type="button"
                  onClick={this.handleInputId}
                >
                  Generate Id
                </button>
              </div>
              <div className="mb-3 mx-2">
                {!this.props.isEdit ? (
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
                    onClick={this.editedUser}
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
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
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
export default Form;
