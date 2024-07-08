import { plainToInstance } from "class-transformer";
import HttpException from "../exceptions/http.exceptions";
import EmployeeService from "../service/employee.service";
import express from "express";
import { CreateEmployeeDto } from "../dto/createemployee.dto";
import { validate } from "class-validator";
import { authorize } from "../middleware/authorize.middleware";
import { RequestWithUser } from "../utils/requestWithUser";
import { Role } from "../utils/role.enum";
import UpdateEmployeeDto from "../dto/updatemployee.dto";

class EmployeeController {
  public router: express.Router;
  constructor(private employeeService: EmployeeService) {
    this.router = express.Router();

    this.router.post("/login", this.loginEmployee);

    this.router.get("/", this.getAllEmployees);

    this.router.get("/:id", this.getEmployeeById);

    this.router.post("/", this.createEmployee);

    this.router.put("/:id", this.updateEmployee);

    this.router.delete("/:id", this.deleteEmployee);
  }

  public loginEmployee = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
      const token = await this.employeeService.loginEmployee(email, password);
      res.status(200).send({ data: token });
    } catch (err) {
      next(err);
    }
  };

  public getAllEmployees = async (
    req: RequestWithUser,
    res: express.Response
  ) => {
    const employees = await this.employeeService.getAllEmployees();
    res.status(200).send(employees);
  };

  public getEmployeeById = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const employees = await this.employeeService.getEmployeeById(
        Number(req.params.id)
      );
      if (!employees) {
        const error = new HttpException(404, "no employee");
        throw error;
      }
      res.status(200).send(employees);
    } catch (err) {
      next(err);
    }
  };

  public createEmployee = async (
    req: RequestWithUser,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {

      // const role=req.role;
      // if (role!=Role.HR){
      //      throw new HttpException(403,"No authorisation")
      // }

      const employeeDto = plainToInstance(CreateEmployeeDto, req.body);
      const errors = await validate(employeeDto);
      if (errors.length) {
        console.log(JSON.stringify(errors));
        throw new HttpException(400, JSON.stringify(errors));
      
      }
      const employees = await this.employeeService.createEmployee(
        employeeDto.name,
        employeeDto.email,
        employeeDto.age,
        employeeDto.password,
        employeeDto.role,
        employeeDto.department_id,
        employeeDto.address
      );
      res.status(201).send(employees);
    } 
  catch (err) {
      next(err);
    }
  };

  public updateEmployee = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const employeeDto = plainToInstance(UpdateEmployeeDto, req.body);
      const errors = await validate(employeeDto);
      if (errors.length) {
        console.log(JSON.stringify(errors));
        throw new HttpException(400, JSON.stringify(errors));
      }

      const employees = await this.employeeService.updateEmployee(
        Number(req.params.id),
        employeeDto.name,
        employeeDto.email,
        employeeDto.age,
        employeeDto.password,
        employeeDto.role,
        employeeDto.department_id,
        employeeDto.address
      );
      res.status(201).send(employees);
    } catch (err) {
      next(err);
    }
  };

  public deleteEmployee = async (
    req: express.Request,
    res: express.Response
  ) => {
    const employees = await this.employeeService.deleteEmployee(
      Number(req.params.id)
    );
    res.status(204).send();
  };
}
export default EmployeeController;
