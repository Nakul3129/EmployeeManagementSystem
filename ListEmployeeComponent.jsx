import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import withRouter from './withRouter'
import axios from 'axios'

// const history = createBrowserHistory();

 
 class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);

    }

    editEmployee(id){
        const {navigate} = this.props;
        navigate(`/updateEmployee/${id}`)
    }

    deleteEmployee(id){
         axios.delete(`http://localhost:8080/api/v1/employee/${id}`).then((response) => {
            this.setState({employees : this.state.employees.filter(empl => empl.id !== id)})
            alert("Are you sure to delete")
        })
         
    }

 
        addEmployee(){
            const {navigate} = this.props;
           // this.props.navigate('/addEmployee');
           navigate("/addEmployee")
        }

    componentDidMount(){
        EmployeeService.getEmployee().then((res) => {
            this.setState({employees: res.data})
        })
    }
  render() {

    return (
      <div>
            <h2 className='text-center'>Employees List</h2>
            <div className="row">
            <button className="btn btn-primary mt-3" onClick={this.addEmployee}> 
                    Add Employee
                </button>
            </div>
            <br />
            <div className="row">
                <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Employee Salary</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.salary}</td>
                                            <td>
                                                <button onClick={() => this.editEmployee(employee.id)} className='btn btn-info'>Update</button>
                                                <button onClick={() => this.deleteEmployee(employee.id)} className='btn btn-danger mx-3'>Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                </table>
            </div>
      </div>
    )
  }
}

export default withRouter(ListEmployeeComponent)
