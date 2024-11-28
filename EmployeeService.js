import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"
const EMPLOYEE_API_BASE_URL_POST = "http://localhost:8080/api/v1/createEmployee"
const EMPLOYEE_API_BASE_URL_PUT = "http://localhost:8080/api/v1/employee"

class EmployeeService{
    
    getEmployee(){
       return axios.get(EMPLOYEE_API_BASE_URL)
    }

    createEmployee(employe){
        return axios.post(EMPLOYEE_API_BASE_URL_POST, employe)
    }

    

}

export default new EmployeeService()