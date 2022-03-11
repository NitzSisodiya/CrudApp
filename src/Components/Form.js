import React from "react";
import { Link } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: "",
      contact: { cc: -91, num: "" },
      email: "",
      gender: "",
      formErrors: {},
      nameError: "",
      genderError: "",
      contactError: "",
      emailError: "",
      isValid: false,
    };
    this.initialState = this.state;
  }

  componentDidMount() {
    if (!this.props.isEdit) {
      this.setState({ id: Number(this.props.user.length) });
      document.getElementById("submitId").disabled = true;
    } else {
      const userId = Number(window.location.pathname.split("/").slice(-1)[0]);
      const userData = this.props.user.find((user) => user.id === userId);
      this.setState({
        id: userId,
        name: userData.name,
        contact: { cc: userData.contact.cc, num: userData.contact.num },
        email: userData.email,
        gender: userData.gender,
      });
      document.getElementById("generateBtn").disabled = true;
    }
  }

  reset = () => {
    this.setState({
      id: this.props.user.length,
      name: "",
      contact: { cc: -91, num: "" },
      email: "",
      gender: "",
    });
    document.getElementById("generateBtn").disabled = false;
  };

  cancel = () => {
    this.setState({
      id: this.props.user.length,
      name: "",
      contact: { cc: -91, num: "" },
      email: "",
      gender: "",
    });
    document.getElementById("generateBtn").disabled = false;
  };

  editUser = () => {
    const editedData = [{ ...this.state }];
    console.log("edited data", editedData);
    this.props.editUserInfo(editedData);
  };

  handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "num") this.setState({ contact: { cc: -91, num: value } });
    this.setState({ [name]: value });
  };

  handleInputId = () => {
    this.setState({ id: this.state.id + 1 });
    console.log("id:", this.state.id);
    document.getElementById("generateBtn").disabled = true;
  };

  handleSubmit = (event) => {
    const { id, name, contact, gender, email } = this.state;
    const { num } = contact;
    event.preventDefault();
    const formData = {
      id: id,
      name: name,
      email: email,
      contact: { cc: -91, num: num },
      gender: gender,
    };
    // const  =
    // if (f) {
    //   if (e) editUserInfo
    //   else addUser
    // }
    this.props.addFormDataIntoTable(formData);
  };

  valid() {
    const { name, contact, gender, email, isValid } = this.state;
    console.log("valid", this.state.isValid);
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
  let contactNum = contact.num;
    if (!isValid) {
      if (!(name !== "" && name.length > 3)) {
        this.setState({ nameError: "Invalid Name" });
      } else {
        this.setState({ nameError: "" });
      }
      if (!(contact.num !== "" && contactNum.length === 10))
        this.setState({ contactError: "Invalid contact " });
      else {
        this.setState({ contactError: "" });
      }
      if (!emailCheck) this.setState({ emailError: "Invalid " });
      else {
        this.setState({ emailError: "" });
      }
      if (!(gender !== "" && (gender === "male" || gender === "female")))
        this.setState({ genderError: "Invalid write male or female " });
      else {
        this.setState({ genderError: "" });
      }
    
    }
     
     document.getElementById("submitId").disabled = isValid;
    
  }

  render() {
    const {
      id,
      name,
      contact,
      gender,
      email,
      emailError,
      nameError,
      contactError,
      genderError,
    } = this.state;
    const { cc, num } = contact;

    return (
      <div className="container-fluid col-6 bg-info mt-1 p-2 ">
        <div className="container" style={{ textAlign: "center" }}>
          {!this.props.isEdit ? <h1> Add User </h1> : <h1> Edit User </h1>}
        </div>
        <hr></hr>
        <form className="frm">
          <div className="mb-3 mx-2">
            <label style={{ marginRight: "17px" }}>Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInput}
              placeholder="your name"
            />
            <p style={{ color: "red", fontSize: "16px" }}>{nameError}</p>
          </div>

          <div className="mb-3 mx-2">
            <label style={{ marginRight: "7px" }}>Gender: </label>
            <input
              type="text"
              name="gender"
              value={gender}
              onChange={this.handleInput}
              placeholder="gender"
            />
            <p style={{ color: "red", fontSize: "16px" }}>{genderError}</p>
          </div>

          <div className="mb-3 mx-2 ">
            <label style={{ marginRight: "0px" }}>Contact: </label>{" "}
            <input
              type="Number"
              name="cc"
              value={cc}
              style={{ width: "60px" }}
              disabled
            />
            <input
              type="Number"
              name="num"
              value={num}
              onChange={this.handleInput}
              placeholder="your contact"
            />
            <p style={{ color: "red", fontSize: "16px" }}>{contactError}</p>
          </div>

          <div className="mb-3 mx-2">
            <label style={{ marginRight: "17px" }}>E-mail: </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInput}
              placeholder="e-mail id"
            />
            <p style={{ color: "red", fontSize: "16px" }}>{emailError}</p>
          </div>

          <div className="mb-3 mx-2">
            <label style={{ marginRight: "5px" }}>User Id:</label>{" "}
            <input value={id} type="text" disabled />
            <button id="generateBtn" type="button" onClick={this.handleInputId}>
              Generate Id
            </button>
          </div>
          <div className="mb-3 mx-2">
            {!this.props.isEdit ? (
              <>
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                  <button
                    id="submitId" type="submit" onClick={this.handleSubmit}
                    style={{ marginRight: "5px" }}
                  >
                    Submit
                  </button>
                </Link>

                <button
                  type="button"
                  onClick={this.reset}
                  style={{ marginRight: "5px" }}
                >
                  Reset
                </button>
              </>
            ) : (<Link to="/" style={{ color: "black", textDecoration: "none" }}>
              <button
                type="Submit"
                onClick={this.editUser}
                style={{ marginRight: "5px" }}
              >
                
                  <span>Save</span>
                  </button>
                </Link>
             
            )}
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              <button type="button" onClick={this.cancel}>
                Cancel
              </button>
            </Link>
            <button type="button" onClick={() => this.valid()}>
              valid
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
