import { useParams } from "react-router-dom"
import pencil from "../assets/pencil.png"
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const Employee=()=>{

  const {state,dispatch}=useOutletContext();

     const {id}=useParams();
     const employee=state.employees.find((item)=>item.id==id);
     return(
        <main className="employee">
      
      <div className="empdetails_heading">
        <h4>Employee Details</h4>
        <Link to={`../edit/${id}`} >
        <div className="edit">
            <img src={pencil} height="20px" width="20px"/>
           <p>Edit</p>
        </div>
        </Link>
      </div>
      <div className="details">
      <div className="ip">
          <label>Employee Name</label>
          <p>{employee.employeeName}</p>
        </div>
        <div className="ip">
          <label>Employee ID</label>
          <p>{employee.id}</p>
        </div>
        <div className="ip">
          <label>Joining Date</label>
          <p>{employee.joiningdate}</p>
        </div>
        <div className="ip">
          <label>Department</label>
          <p>{employee.department}</p>
        </div>
        <div className="ip">
          <label>Role</label>
          <p>{employee.role}</p>
        </div>
        <div className="ip">
          <label>Status</label>
          <p className="color" style={employee.status=="Active"?{backgroundColor:"#d3f4be"}:employee.status=="InActive"?{backgroundColor:"#ffbfbf"}:{backgroundColor:"#f5ecb8"}}>{employee.status}</p>
        </div>
        <div className="ip1">
          <label>Address</label>
          <p>{employee.address}</p>
        </div>
        <div className="ip1">
          <label>Experience</label>
          <p>{employee.experience}</p>
        </div>
        
        </div>
    </main>
  );

     
}
export default Employee