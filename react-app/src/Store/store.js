import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import employeeApi from "../api/employeeBaseApi";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware),
});

setupListeners(store.dispatch);
export default store;
