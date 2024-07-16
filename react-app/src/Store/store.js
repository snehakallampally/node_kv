import {configureStore} from "@reduxjs/toolkit"
import employeeReducer from "./employeeReducer";

const store=configureStore({
    reducer:{
        employee:employeeReducer
    }
})
export default store;