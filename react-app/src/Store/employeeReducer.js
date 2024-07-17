import { createAction, createReducer } from "@reduxjs/toolkit";
import employees from "../constants/dummy";

const addEmployee = createAction("ADD_EMPLOYEE");
const editEmployee = createAction("EDIT_EMPLOYEE");

const employeeReducer = createReducer({ employees: employees }, (builder) => {
  //createReducr function has initialised value first and then the function
  builder.addCase(addEmployee, (state, action) => {
    state.employees.push(action.payload);
  });
  builder.addCase(editEmployee,(state,action)=>{
     state.employees= state.employees.map((employee)=>{employee.id==action.payload.id?action.payload:employee})
      
  })
});

export { employeeReducer as default, addEmployee ,editEmployee};
