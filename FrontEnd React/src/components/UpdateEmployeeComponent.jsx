import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            department: '',
            role: '',
            salary: '',
            address: ''
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changedepartmentHandler = this.changedepartmentHandler.bind(this);
        this.changeroleHandler = this.changeroleHandler.bind(this);
        this.changesalaryHandler = this.changesalaryHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({name: employee.name,
                department: employee.department,
                role : employee.role,
                salary : employee.salary,
                address : employee.address
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {name: this.state.name, department: this.state.department, role: this.state.role,salary: this.state.salary,address: this.state.address};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changedepartmentHandler= (event) => {
        this.setState({department: event.target.value});
    }

    changeroleHandler= (event) => {
        this.setState({role: event.target.value});
    }
    changesalaryHandler= (event) => {
        this.setState({salary: event.target.value});
    }
    changeaddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="name" name="firstName" className="form-control" 
                                                value={this.state.name} onChange={this.changenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Department: </label>
                                            <input placeholder="department" name="lastName" className="form-control" 
                                                value={this.state.department} onChange={this.changedepartmentHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Role: </label>
                                            <input placeholder="role" name="DOB" className="form-control" 
                                                value={this.state.role} onChange={this.changeroleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Salary: </label>
                                            <input placeholder="salary" name="ContactNo" className="form-control" 
                                                value={this.state.salary} onChange={this.changesalaryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="address" name="ContactNo" className="form-control" 
                                                value={this.state.address} onChange={this.changeaddressHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent


