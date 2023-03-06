import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <div> { this.state.employee.name }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Department:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <div> { this.state.employee.department }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Role:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <div> { this.state.employee.role }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Salary:&nbsp;&nbsp;&nbsp;</label>
                            <div> { this.state.employee.salary }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Address:&nbsp;&nbsp;&nbsp;</label>
                            <div> { this.state.employee.address }</div>
                        </div>
                    </div>

                </div>
                <div className='backbutton'> <Link to="/view-employee/employees"><button>BACK</button></Link>
                </div>
                
            </div>
        )
    }
}

export default ViewEmployeeComponent


