import React from "react";
import Card from 'react-bootstrap/Card';

export default class ViewData extends React.Component {
    constructor(props) {
        super(props);

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

                                    <ul>
                                        <li>id:{this.props.data.id} </li>
                                        <li>Name:{this.props.data.name} </li>
                                        <li>E-mail:{this.props.data.email} </li>
                                        <li>Contact:{this.props.data.contact} </li>
                                        <li>gender:{this.props.data.gender} </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </>
        );

    }
}