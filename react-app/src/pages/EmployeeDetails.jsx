import { Link, useNavigate } from "react-router-dom";
import pencil from "../assets/pencil.png";
import Delete from "../assets/delete.png";
import { useState } from "react";
import Pop from "../componenets/Pop";
import { actionTypes } from "../Store/usereducer"
import { useOutletContext } from "react-router-dom";
import { useDeleteEmployeeMutation } from "../api/employeeApi";


const EmployeeDetails = (props) => {

  const {state,dispatch}=useOutletContext();

  const [del, setDeleteState] = useState(false);

  const[deletetrigger,{data}]=useDeleteEmployeeMutation(props.content.id);
  

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    navigate(`${props.content?.id}`);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    console.log("Clicked");
    navigate(`edit/${props.content?.id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation()
    console.log("clicked")
    setDeleteState(true);
  };

  const onDelete=(e)=>{
    e.stopPropagation()
    deletetrigger(props.content.id)
    setDeleteState(false)
  };

 
   
  const onClose=(e)=>{
    setDeleteState(false);
    e.stopPropagation();
  }
  
  return (
    <section className="row" onClick={handleClick}>
      <div className="ip">
        <label>{props.content?.employeeName}</label>
      </div>
      <div className="ip">
        <label>{props.content?.id}</label>
      </div>
      <div className="ip">
        <label>{props.content?.joiningdate}</label>
      </div>
      <div className="ip">
        <label>{props.content?.department.dept_name}</label>
      </div>
      <div className="ip">
        <label>{props.content?.role}</label>
      </div>
      <div className="ip">
        <label
          className="color"
          style={
            props.content?.status == "Active"
              ? { backgroundColor: "#d3f4be" }
              : props.content?.status == "InActive"
              ? { backgroundColor: "#ffbfbf" }
              : { backgroundColor: "#f5ecb8" }
          }
        >
          {props.content?.status}
        </label>
      </div>
      <div className="ip">
        <label>{props.content?.experience}</label>
      </div>

      <div className="ip">
        <img src={Delete} height="20px" width="20px" onClick={handleDelete} />
        {del && (
        <Pop  onClick={onDelete} onClose={onClose}/>
      )}
        <img
          src={pencil}
          height="20px"
          width="20px"
          onClick={handleEditClick}
        />
      </div>
      
      

    </section>
    
  )
  
};
export default EmployeeDetails;
