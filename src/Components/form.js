import React from "react";
import { Link } from "react-router-dom";

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      contact: '',
      email: '',
      gender:''    
    };
  }

  // addUser = () => {
  //   this.setState({
  //     user: [...this.props.data, this.state]
  //   })
  //   console.log(this.state);
  // }

  reset = () => {
    this.setState({
      id: 0,
      name: '',
      contact: '',
      email: '',
      gender: ''
    })
  }
  handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target
   
    // const fieldValue = event.target.value;
    this.setState({ ...this.state, [name]: value });
    // const newFormData = { ...this.state };
    // newFormData[fieldName] = fieldValue;

    // this.setState(newUser)
  }


  handleInputId = () => { this.setState({ id: 1 }) }
  // onFormSubmit = () => {
  //   this.setstate([...this.props, ...this.state])
  //   console.log(this.setstate)
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData ={
      id:this.state.id,
      name:this.state.name,
      email:this.state.email,
      contact:this.state.contact,
      gender:this.state.gender      
    }
    this.props.addFormDataIntoTable(formData)
  }

  render() {
    return (
      <>
        <div>
          <div className="container bg-primary mt-1 p-2 ">
            <div className="container"> <h1>Fill out the Details</h1> </div>
            <form onSubmit={this.onFormSubmit}  >

              <div className="mb-3">
                <label>Name: </label>
                <input type='text' name='name'
                  value={this.state.name}
                  onChange={this.handleInput}
                  placeholder="your name" required />
              </div>
              <div className="mb-3">
                <label>Contact: </label> <input type='Number' name='contact'
                  value={this.state.contact}
                  onChange={this.handleInput}
                  placeholder="your contact" required />
              </div>
              <div className="mb-3">
                <label>E-mail: </label>
                <input type='email' name='email'
                  value={this.state.email}
                  onChange={this.handleInput}
                  placeholder="e-mail id" required />
              </div>
              <div className="mb-3">
                <label>Gender: </label>
                <input type='text' name='gender'
                  value={this.state.gender}
                  onChange={this.handleInput}
                  placeholder="gender" required />


                <div className="mb-3" >
                  <label>User Id:</label> <input type="text" disabled />
                  <button type="button" onClick={this.handleInputId}>Generate Id</button>
                </div>

              </div>

              <div className="mb-3">
                <button type="Submit" onClick={this.handleSubmit}>Submit</button>
                <button type="button" onClick={this.reset}>Reset</button>
                <Link to='/table'> <button type="button" >Cancel</button></Link>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

