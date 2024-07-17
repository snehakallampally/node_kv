import { useOutletContext } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetails";
import { useSelector } from "react-redux";
import { useGetEmployeeListQuery } from "../api/employeeApi";
import { useState, useEffect } from "react";

const EmployeeList = () => {
  // const {state,dispatch}=useOutletContext();

  const employees = useSelector((state) => state.employee.employees);
  const [list, setList] = useState([]);
  const { data = [] } = useGetEmployeeListQuery();


  useEffect(() => {
      const employees = data.map((employee) => ({
        ...employee,
        joiningdate: new Date(employee?.created_at).toLocaleString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        employeeName: employee?.name,
        status: employee?.status,
        experience: employee?.experience,
      }));
     
      setList(employees);
    }, [data]);

  return (
    <main className="employee_list">
      <section className="employee_list_header">
        <h4>Employee List</h4>
        <div className="extraoptions">
          <h5>Filter By</h5>
          <select className="status">
            <option className="selecttext" value="" disabled selected>
              Status
            </option>
            <option className="selecttext">Active</option>
            <option className="selecttext">Inactive</option>
          </select>
          <div className="crtempparent">
            <p>+</p>
            <h5>Create Employee</h5>
          </div>
        </div>
      </section>
      <section className="emptable">
        <div className="ip">
          <label>Employee Name</label>
        </div>
        <div className="ip">
          <label>Employee ID</label>
        </div>
        <div className="ip">
          <label>Joining Date</label>
        </div>
        <div className="ip">
          <label>Department</label>
        </div>
        <div className="ip">
          <label>Role</label>
        </div>
        <div className="ip">
          <label>Status</label>
        </div>
        <div className="ip">
          <label>Experience</label>
        </div>
        <div className="ip">
          <label>Action</label>
        </div>
      </section>

      {
        list?.map((employee, index) => (
          <EmployeeDetails key={employee?.id} content={employee} />
        ))}
    </main>
  );
};
export default EmployeeList;
