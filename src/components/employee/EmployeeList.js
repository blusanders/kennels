import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
const { employees, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()

}, [])

const history = useHistory();

return (
  <div>
      <div>
        <h2>Employees</h2>
        <button
          onClick={() => {
            history.push("/employees/create");
          }}
        >
          Hire Employee
        </button>
      </div>
      <div className="employees">
        {
        employees.map(employee => {
            return <EmployeeCard key={employee.id} employee={employee} />
        })
        }
    </div>
    </div>
    )
}

