import { DataSource } from "typeorm";
import EmployeeController from "../controller/employee.controller";
import EmployeeRepository from "../repository/employee.repository";
import EmployeeService from "../service/employee.service";
import dataSource from "../db/data-source.db";
import Employee from "../entity/employee.entity";

const employeeController=new EmployeeController(new EmployeeService(new EmployeeRepository(dataSource.getRepository(Employee))));
const employeeRouter=employeeController.router    //rouer can be accessed outdide sinc eits defines as public

export default employeeRouter;