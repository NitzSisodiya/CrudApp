import React from "react";
import { Link  } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: "",
      contact: { cc: -91, num: "" },
      email: "",
      gender: "",
      formErrors: {}  
      };
      this.initialState = this.state; 
  }

  componentDidMount() {
    if (!this.props.isEdit) {
      this.setState({ id: Number(this.props.user.length) });
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
  };

  cancel = () => {
    this.setState({
      id: this.props.user.length,
      name: "",
      contact: { cc: -91, num: "" },
      email: "",
      gender: "",
    });
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

  handleFormValidation() {    
    const { name, email, gender, contact } = this.state;    
    const { num } = contact;
    let formErrors = {};    
    let formIsValid = true;    

    // name     
    if (!name) {    
        formIsValid = false;    
        formErrors["nameErr"] = "Name is required.";    
    }    

    //Email    
    if (!email) {    
        formIsValid = false;    
        formErrors["emailErr"] = "Email id is required.";    
    }    
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {    

        formIsValid = false;    
        formErrors["emailErr"] = "Invalid email id.";    
    }      

    //Gender    
    if (gender === '' || gender === "select") {    
        formIsValid = false;    
        formErrors["genderErr"] = "Select gender.";    
    }    

    //contact  
    if (!num) {    
        formIsValid = false;    
        formErrors["num"] = "Phone number is required.";    
    }    
    else {    
        var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
        if (!mobPattern.test(num)) {    
            formIsValid = false;    
            formErrors["numErr"] = "Invalid phone number.";    
        }    
    }    
    this.setState({ formErrors: formErrors });    
    return formIsValid;    
}   

  render() {
    const { id, name, contact, gender, email } = this.state;
    const { cc, num } = contact;
    const { nameErr,emailErr, numErr, genderErr} = this.state.formErrors;
    return (
      <div className="container-fluid col-6 bg-info mt-1 p-2 ">
        <div className="container" style={{ textAlign: "center" }}>
          {!this.props.isEdit ? <h1> Add User </h1> : <h1> Edit User </h1>}
        </div>
        <hr></hr>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="mb-3 mx-2">
            <label style={{ marginRight: "17px" }}>Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInput}
              placeholder="your name"
              required
              className={nameErr ? 'showError' : ""}
            />
            {nameErr &&
            <div style={{color:'red', paddiingBottom: "10px"}}> {nameErr}</div>
            }
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
              className={genderErr ? 'showError' : ""}
            />
            {genderErr &&
            <div style={{color:'red', paddiingBottom: "10px"}}> {genderErr}</div>
            }
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
              required
              className={numErr ? 'showError' : ""}
            />
            {numErr &&
            <div style={{color:'red', paddiingBottom: "10px"}}> {numErr}</div>
            }
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
              className={emailErr ? 'showError' : ""}
            />
             {emailErr &&
            <div style={{color:'red', paddiingBottom: "10px"}}> {emailErr}</div>
            }
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
                <button
                  type="Submit"
                  // onClick={ this.handleSubmit }
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
                onClick={ this.editUser }
                style={{ marginRight: "5px" }}
              >
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                  <span>Save</span>
                </Link>
              </button>
            )}
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              <button type="button" onClick={this.cancel}>
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
