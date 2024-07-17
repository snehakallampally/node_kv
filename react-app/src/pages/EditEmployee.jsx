
import { useParams } from "react-router-dom"
import Form from "../componenets/Form"
import { actionTypes } from "../Store/usereducer"
import { useOutletContext } from "react-router-dom";
import { editEmployee } from "../Store/employeeReducer";
import { useDispatch } from "react-redux";


const EditEmployee=()=>{
    const {id}=useParams()
    const dispatch=useDispatch();

    // const {state,dispatch}=useOutletContext();
  const editEmp=(props)=>{
    dispatch(editEmployee(props));
}
    return(
        <main className="main1">
      <div className="createemp">
        <h4>Edit Employee</h4>
      </div>
      <Form isVisible={true} isDisabled={true} id={id} onCreateorEdit={editEmp}></Form>
    </main>
    )
}
export default EditEmployee;