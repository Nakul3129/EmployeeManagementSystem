import React, { Component } from "react";
import withRouter from "./withRouter";
import axios from "axios";

class UpdateEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      salary: ""
    };
  }

  componentDidMount() {
    const { id } = this.props;
    axios
      .get(`http://localhost:8080/api/v1/employee/${id}`)
      .then((response) => {
        const { firstName, lastName, email, salary } = response.data;
        this.setState({ firstName, lastName, email, salary });
      })
      .catch((error) => {
        console.log("error fetching user data: ", error);
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCancel = () => {
    const{navigate} = this.props;
    navigate("/")
  }

  handleUpdate = (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    const { firstName, lastName, email, salary } = this.state;
    const { id } = this.props;

    axios
      .put(`http://localhost:8080/api/v1/employee/${id}`, {
        firstName,
        lastName,
        email,
        salary
      })
      .then((response) => {
        console.log("User updated:", response.data);
        const { navigate } = this.props;
        navigate("/");
        //alert("User updated successfully!");
      })
      .catch((error) => {
        console.error("There was an error updating the user!", error);
      });
  };
  render() {
    return (
      <div className="mt-5 border p-5">
        <h2 className="pb-2">Update User</h2>
        <form onSubmit={this.handleUpdate}>
           

          <div className="form-group mt-3">
            <label className="fs-6 fw-bold">First Name: </label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="form-control"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>

           

         <div className="form-group mt-3">
              <label className="fw-bold">Last Name: </label>
              <input type="text"
               placeholder='Last Name'
               name='lastName'
               className='form-control'
               value={this.state.lastName}
               onChange={this.handleChange}  />
          </div>

           

           <div className="form-group mt-3">
             <label className="fw-bold" >Email: </label>
             <input type="text"
              placeholder='Email'
              name='email'
              className='form-control'
              value={this.state.email}
              onChange={this.handleChange}  />
           </div>

           <div className="form-group mt-3">
             <label className="fw-bold" >Salary:  </label>
             <input type="text"
              placeholder='Salary'
              name='salary'
              className='form-control'
              value={this.state.salary}
              onChange={this.handleChange}  />
           </div>


          <button className='btn btn-success mt-5' type="submit">Save Changes</button>
          <button className='btn btn-danger mt-5 mx-3' onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateEmployee);
