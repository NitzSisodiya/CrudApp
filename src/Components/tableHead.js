import React from "react";
import { Link } from "react-router-dom";

import Table from "./table";

export default class TableHead extends React.Component {
    render() {
        return ( 
            <>
                <div className="container-fluid m-1">
                    <nav>
                        <div className="container-fluid col-12 " style={{display:'flex'}}>
                            <div className="col-10 m-2" style={{textAlign:'center'}} >
                              <b><u>USER RECORDS</u></b>
                              </div>
                           <div className="col-2 m-2">
                              <Link to='/form'  style={{ textDecoration: 'none' }} >
                              <button type="button" >Add User</button> </Link>
                              </div>
                        </div>
                    </nav>
                </div>
                <Table />

            </>
        );

    }
}