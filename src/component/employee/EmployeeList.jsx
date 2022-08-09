import React, { useEffect, useState } from "react";
import employeeJSONData from "../../data/employee.json";
import {Link} from "react-router-dom"

const EmployeeTableHeader = () => {
   return ( <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">DOB</th>
      <th scope="col">Designation</th>
      <th scope="col">Profile</th>
      <th scope="col">Experience</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>)
}

const EmployeeTableRow = ({employee}) => {
    
    const deleteConfirmation = () => {
        window.confirm("Are you sure you want to delete?")
    }
    const editEmployeeURL = "/"
    return (
        <tr>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.dob}</td>
            <td>{employee.designation}</td>
            <td>{employee.profile}</td>
            <td>{employee.experience}</td>
            <td><Link to={`editEmployee/${employee.id}`}>Edit</Link> <Link onClick={deleteConfirmation}>Delete</Link></td>
        </tr>
    )
}

const EmployeeList = () => {
    const [employeeList ,setEmployeeList] = useState([]); 
    //load employee data
    useEffect(() => {
        setEmployeeList(JSON.parse(JSON.stringify(employeeJSONData)));
    },[])
    return (
        <table className="table">
        <EmployeeTableHeader/>
        <tbody>
        {
            employeeList.map((employee, index) => {
               return <EmployeeTableRow key={index} employee={employee} />
            })
        }
        </tbody>
      </table>
    )
}

export default EmployeeList;

////anju.radhakrishnan@inncrewin.com