import { useOutletContext } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetails";
import { useSelector } from "react-redux";

const EmployeeList = () => {
  // const {state,dispatch}=useOutletContext();
  const employees=useSelector((state)=>state.employee.employees)
  let count = 0;

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

      {employees.map((employee, index) => {
        return <EmployeeDetails key={employee.id} content={employee} />;
      })}
    </main>
  );
};
export default EmployeeList;
