import "./styles.scss";
import Form from "../componenets/Form";
import { useOutletContext } from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import { actionTypes } from "../Store/usereducer"
import { useDispatch } from "react-redux";
import { addEmployee } from "../Store/employeeReducer";


const Createemployee = () => {
  // const {state,dispatch}=useOutletContext();
const dispatch=useDispatch();

  const addEmp=(props)=>{
    console.log(props)
    props={...props, id:uuidv4()}
    dispatch(addEmployee(props))
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
