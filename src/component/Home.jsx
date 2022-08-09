import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Home extends Component {

    constructor(props) {
        super(props);
    }
  
    render() {
        return ( 
            <>
            <h2 className="text-center">Home</h2>
            <Link to={`employeeList`} style={{marginRight:10}}>Employee List</Link> 
            <Link to={`addEmployee`}>Add New</Link>
            </>
        );
    }

}

export default Home;