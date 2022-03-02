import React from "react";
import { Link } from "react-router-dom";


export default class Form extends React.Component {

  constructor() {
    super();
    this.state = {
            id:0
    };
  }
  reset = () => {
    this.setState({
      id: 0,
      name: '',
      contact: '',
      email: '',
      gender:''
    })
  }
  
 
  handleInputId = (id) => { this.setState({ id:id+1 })
console.log(this.state.id);
}

  handleInputName = (event) => { this.setState({ name: event.target.value }) }

  handleInputContact = (event) => { this.setState({ contact: event.target.value }) }

  handleInputEmail = (event) => { this.setState({ email: event.target.value }) }

  handleInputGender = (event) => { this.setState({ gender: event.target.value }) }

   onFormSubmit= (event) => {
      
      };
  render() {
    return (
      <>
        <div>
          <div className="container bg-primary mt-1 p-2 ">
            <div className="container"> <h1>Fill out the Detiails</h1> </div>
            <form onSubmit={this.onFormSubmit}  >
              <div className="mb-3" >
                <label>User Id:</label> <input type="text" disabled />
                <button type="button" onClick={this.handleInputName}>Generate Id</button>
              </div>
              <div className="mb-3">
                <label>Name: </label>
                <input type='text'
                  value={this.state.name}
                  onChange={this.handleInputName}
                  placeholder="your Name" required />
              </div>
              <div className="mb-3">
                <label>Contact: </label> <input type='Number'
                  value={this.state.contact}
                  onChange={this.handleInputContact}
                  placeholder="your contact" required />
              </div>
              <div className="mb-3">
                <label>E-mail: </label> 
                <input type='email'
                  value={this.state.email}
                  onChange={this.handleInputEmail}
                  placeholder="e-mail id" required />
              </div>
              <div className="mb-3">
                <label>Gender: </label>

                <input type='radio' name="gender"  
                value='male' id="male" checked={this.state.gender==='male'}
                onChange={this.handleInputGender}/> 
                <label > Male</label>

                <input type='radio' name="gender"  
                value='Female' id="Female" checked={this.state.gender==='Female'}
                 onChange={this.handleInputGender} /> 
                <label >Female</label>
               
                      
              </div>

              <div className="mb-3">
                <button type="Submit" onClick={this.onFormSubmit}>Submit</button>
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
//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