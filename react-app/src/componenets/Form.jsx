import TextField from "./TextField";
import Button from "./Button";
import Options from "../componenets/Options";
import "../pages/styles.scss";
import { useState, useEffect } from "react";
import employees from "../constants/dummy";

const Form = (props) => {

const handleCreateorEdit=()=>{
    props.onCreateorEdit(employee);
    console.log(employee);
}

  const [employee, setEmployeeState] = useState({
    employeeName: "",
    id: "",
    joiningDate: "",
    department:"",
    role: "",
    status: "",
    address: "",
    experience:""
  });


  useEffect(() => {
    if (props.id) {
      console.log(employees.find((item) => item.id == props.id));
      setEmployeeState(employees.find((item) => item.id == props.id));
    }
  }, []);

  console.log(employee);

  const roleOptions = [
    {
      id: 1,
      val: "",
      label: "Role",
      isDisabled: true,
      isSelected:""
    },
    {
      id: 2,
      val: "Software Developer",
      label: "Software Developer",
      isDisabled: false,
      isSelected: ""
    },
    {
      id: 3,
      val: "Associate Tester",
      label: "Associate Tester",
      isDisabled: false,
      isSelected: " "
    },
  ];
  const statusOptions = [
    {
      id: 1,
      val: "",
      label: "Status",
      isDisabled: true,
      isSelected: " "
    },
    {
      id: 2,
      val: "Active",
      label: "Active",
      isDisabled: false,
      isSelected: " "
    },
    {
      id: 3,
      val: "InActive",
      label: "InActive",
      isDisabled: false,
      isSelected: " "
    },
    {
      id: 4,
      val: "Probation",
      label: "Probation",
      isDisabled: false,
      isSelected: " "
    },
  ];
  const fields = [
    {
      id: 1,
      label: "Employee Name",
      field: "employeeName",
      placeholder: "Employee Name",
      isVisible:true,
    
    },
    {
      id: 2,
      label: "Employee ID",
      field: "id",
      placeholder: "Employee ID",
      isVisible:props.isVisible,
      isDisabled:props.isDisabled,
    },
    {
      id: 3,
      label: "Joining Date",
      field: "joiningdate",
      placeholder: "Joining Date",
      isVisible:true,
    },
    {
      id: 4,
      Component: Options,
      label: "Role",
      field: "role",
      placeholder: "Role",
      op: roleOptions,
      isVisible:true,
    },
    {
      id: 5,
      label: "Department",
      field: "department",
      placeholder: "Department",
      isVisible:true,
    },
    {
      id: 6,
      Component: Options,
      label: "Status",
      field: "status",
      placeholder: "Status",
      op: statusOptions,
      isVisible:true,
    },
    {
      id: 7,
      label: "Experience",
      field: "experience",
      placeholder: "Experience",
      isVisible:true,
    },
    {
      id: 8,
      label: "Address",
      field: "address",
      placeholder: "Address",
      isVisible:true,
    },
  ];

  // console.log(employee)
  const handleChange = (value, field) => {
    setEmployeeState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <form>
      <div className="form">
        {/* <TextField label="Employee Name" placeholder="Employee Name"/>
            <TextField label="Joining Date" placeholder="Joining Date"/>
            <TextField label="Employee ID" placeholder="Employee ID"/>
            <Options label="Role" op={roleOptions}></Options>
            <Options label="Status" op={statusOptions}></Options>
            <TextField label="Experience" placeholder="Experience"/>
            <TextField label="Address" placeholder="Address"/> */}
        {fields.map((item) => {
            return item.Component ? (
            <item.Component
              key={item.id}
              label={item.label}
              op={item.op}
              field={item.field}
              value={employee[item.field]}
              onChange={handleChange}
            />
          ) : item.isVisible?(
            <TextField
              key={item.id}
              label={item.label}
              placeholder={item.placeholder}
              value={employee[item.field]}
              onChange={handleChange}
              field={item.field}
              isDisabled={item.isDisabled}
            />
          ):<div></div>;
        })}
      </div>

      <Button className="crt" type="button" label="Create" onClick={handleCreateorEdit}/>
      <Button className="cncl" type="button" label="Cancel" />
    </form>
  );
};

export default Form;
