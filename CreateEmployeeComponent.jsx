import React, { Component } from 'react'
import withRouter from './withRouter';
import EmployeeService from '../services/EmployeeService';

 class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            salary:""
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
         this.saveEmployee = this.saveEmployee.bind(this);
    }

    changeFirstNameHandler(event){
        this.setState({firstName: event.target.value})
    }

    changeLastNameHandler(event){
        this.setState({lastName: event.target.value})
    }

   changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changeSalaryHandler = (event) => {
        this.setState({salary: event.target.value});
    }

    cancel = () => {
        const{ navigate } = this.props;
        navigate("/")
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, salary: this.state.salary};

        EmployeeService.createEmployee(employee).then(res => {
            const{navigate} = this.props;
            navigate('/')
            
        })

       console.log("employee => " + JSON.stringify(employee));
        
    }


  render() {
    return (
      <div>
         <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 mt-5">
                    <h3 className="text-centre mt-2 fs-3">
                        Add Employee
                    </h3>
                    <div className="card-body">
                        <form>

                            <div className="form-group">
                                <label className='fs-4'>First Name: </label>
                                <input type="text"
                                 placeholder='First Name'
                                 name='firstName'
                                 className='form-control'
                                 value={this.state.firstName}
                                 onChange={this.changeFirstNameHandler}  />
                            </div>

                            <div className="form-group mt-3">
                                <label className='fs-4'>Last Name: </label>
                                <input type="text" placeholder='Last Name' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler}  />
                            </div>

                            <div className = "form-group mt-3">
                                            <label className='fs-4'> Email Id: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                            </div>

                            <div className = "form-group mt-3">
                                            <label className='fs-4'> Salary: </label>
                                            <input placeholder="Salary" name="salary" className="form-control" 
                                                value={this.state.salary} onChange={this.changeSalaryHandler}/>
                            </div>

                            <div className='mt-3'> 
                            <button className='btn btn-success mt-3' onClick={this.saveEmployee}>Save</button>
                            <button className='btn btn-danger mt-3' onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
         </div>

      </div>
    )
  }
}

export default withRouter(CreateEmployeeComponent)
