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
    console.log(action.payload.id)
      state.employees.splice(action.payload.id,1,action.payload)
      console.log(state.employees)
      
  })
});

export { employeeReducer as default, addEmployee ,editEmployee};
