import { useParams } from "react-router-dom";
import pencil from "../assets/pencil.png";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useGetEmployeeListQuery } from "../api/employeeApi";
import { useGetEmployeesDetailsQuery } from "../api/employeeApi";

const Employee = () => {
  const { state, dispatch } = useOutletContext();

  const { id } = useParams();
  const { data={} } = useGetEmployeesDetailsQuery(id);
   console.log(data)
  const employee = state.employees.find((item) => item.id == id);
  return (
    <main className="employee">
      <div className="empdetails_heading">
        <h4>Employee Details</h4>
        <Link to={`../edit/${id}`}>
          <div className="edit">
            <img src={pencil} height="20px" width="20px" />
            <p>Edit</p>
          </div>
        </Link>
      </div>
      <div className="details">
        <div className="ip">
          <label>Employee Name</label>
          <p>{data.name}</p>
        </div>
        <div className="ip">
          <label>Employee ID</label>
          <p>{data.id}</p>
        </div>
        <div className="ip">
          <label>Email</label>
          <p>{data.email}</p>
        </div>
        <div className="ip">
          <label>Joining Date</label>
          <p>{new Date(data.created_at).toLocaleString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}</p>
        </div>
        <div className="ip">
          <label>Department</label>
          <p>{data?.department?.dept_name}</p>
        </div>
        <div className="ip">
          <label>Role</label>
          <p>{data.role}</p>
        </div>
        <div className="status">
          <label>Status</label>
          <p
            className="color"
            style={
              data.status == "Active"
                ? { backgroundColor: "#d3f4be" }
                : data.status == "InActive"
                ? { backgroundColor: "#ffbfbf" }
                : { backgroundColor: "#f5ecb8" }
            }
          >
            {data.status}
          </p>
        </div>
        <div className="ip1">
          <label>Address</label>
          <p>{data.address?.line1||""}</p>
        </div>
        <div className="ip1">
          <label>Experience</label>
          <p>{data.experience}</p>
        </div>
      </div>
    </main>
  );
};
export default Employee;
