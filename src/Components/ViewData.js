import React from "react";
import Card from "react-bootstrap/Card";

export default class ViewData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split("/").slice(-1);
    const idMatch = Number(id[0]);
    this.setState({ id: idMatch });
  }

  render() {
    return (
      <div className=" container col-6  bg-dark">
        <Card style={{ width: "auto", height: "auto" }}>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              {" "}
              <u> User Records </u>{" "}
            </Card.Title>
            <Card.Text>
              <div>
                {this.props.user
                  .filter((user1) => user1.id === this.state.id)
                  .map((user, index) => (
                    <ul key={index} style={{ listStyleType: "none" }}>
                      <li> Id : {user.id} </li>
                      <li> Name : {user.name} </li>
                      <li> E-mail : {user.email} </li>
                      <li>
                        {" "}
                        Contact: {user.contact.cc}-{user.contact.num}{" "}
                      </li>
                      <li> Gender : {user.gender} </li>
                    </ul>
                  ))}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
