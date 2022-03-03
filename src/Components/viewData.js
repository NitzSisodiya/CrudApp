import React from "react";
import Card from 'react-bootstrap/Card';

export default class ViewData extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        
       const id= window.location.pathname.split("/").slice(-1);
       const idMatch=Number(id[0]);          
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
                                       this.props.data.filter( (items,index)=> ( items.id=== idMatch)).map((item=>
                                    <ul>
                                        <li key={item.id} > id : {item.id} </li>
                                        <li key={item.name} >   Name   : {item.name} </li>
                                        <li key={item.email} >  E-mail : {item.email} </li>
                                        <li key={item.contact} >Contact: {item.contact} </li>
                                        <li key={item.gender}>  gender: {item.gender} </li>
                                    </ul> 
                                        
                                        ))
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