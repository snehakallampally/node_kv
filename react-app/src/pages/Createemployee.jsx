import "./styles.scss";
import Form from "../componenets/Form";
import { useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { actionTypes } from "../Store/usereducer";
import { useDispatch } from "react-redux";
import { addEmployee } from "../Store/employeeReducer";
import {
  useAddEmployeeMutation,
  useGetDepartmentByNameQuery,
} from "../api/employeeApi";

const Createemployee = () => {
  // const {state,dispatch}=useOutletContext();
  const dispatch = useDispatch();
  const [trigger, { data }] = useAddEmployeeMutation();
  const { data: depts, isLoading } = useGetDepartmentByNameQuery();

  const addEmp = (props) => {
    console.log(props);
    if (isLoading) return;
    const department = depts?.filter((dept) => {
      return props.department === dept?.dept_name;
    });
    console.log(department)
    const info = {
      ...props,
      name: props.employeeName,
      email: props.email,
      password: props.password,
      role: props.role,
      department_id:Number(department[0]?.id),
      status: props.status,
      experience: Number(props.experience),
      address: { line1: props.address, pincode: "" },
    };
    console.log(info)
    trigger(info);
  };

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
