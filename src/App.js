import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import EmployeeList from './component/employee/EmployeeList';
import AddEditEmployee from './component/employee/AddEditEmployee';

function App() {   

  return (
      <div className="container">
          <Router>
              <div className="col-md-12">
                  <h1 className="text-center" style={style}></h1>
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/employeeList" component={EmployeeList} />
                      <Route path="/addEmployee" component={AddEditEmployee} />
                      <Route path="/editEmployee/:id" component={AddEditEmployee} />
                      
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
