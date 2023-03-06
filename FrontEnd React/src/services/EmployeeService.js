import axios from 'axios';
//old
const PATIENT_API_BASE_URL= "http://localhost:8080/api/v1/employees";
 

class EmployeeService {
  
    

    getEmployees(){
        return axios.get(PATIENT_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(PATIENT_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(PATIENT_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(PATIENT_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(PATIENT_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()


