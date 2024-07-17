import "./styles.scss";
import Form from "../componenets/Form";
import { useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { actionTypes } from "../Store/usereducer";
import { useDispatch } from "react-redux";
import { addEmployee } from "../Store/employeeReducer";
import { useAddEmployeeMutation } from "../api/employeeApi";

const Createemployee = () => {
  // const {state,dispatch}=useOutletContext();
  const dispatch = useDispatch();
  const [trigger, { data }] = useAddEmployeeMutation();

  const addEmp = (props) => {
    console.log(props);
    const info={...props,name:props.employeeName,created_at:joiningdate,email:props.email,password:props.password,role:props.role,status:props.status,experience:props.experience}
    trigger(info);
  }
    

  return (
    <main className="main1">
      <div className="createemp">
        <h4>Create Employee</h4>
      </div>
      <Form isVisible={false} onCreateorEdit={addEmp}></Form>
    </main>
  );
};

export default Createemployee;
