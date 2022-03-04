import React from "react";
import Card from 'react-bootstrap/Card';

export default class ViewData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
    console.log("props",this.props)
  }
  componentDidMount() {
    const id = window.location.pathname.split("/").slice(-1);
    const idMatch = Number(id[0]);
    this.setState({ id: idMatch })
  }
  

  render() {

    return (
      <>
        <div>
          <div className=' container col-6  bg-dark'>
            <Card style={{ width: 'auto', height: 'auto' }} >
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }} > <u> User Records </u> </Card.Title>
                <Card.Text>
                  <div>
                    {
                      this.props.data.filter((items, index) => (items.id === this.state.id)).map((item, index) =>
                        <ul key={index}>
                          <li> Id : {item.id} </li>
                          <li> Name   : {item.name} </li>
                          <li> E-mail : {item.email} </li>
                          <li> Contact: {item.contact} </li>
                          <li> Gender : {item.gender} </li>
                        </ul>
                      )
                    }
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