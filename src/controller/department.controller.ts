import express from "express";
import DepartmentService from "../service/department.service";
import { Http2ServerRequest } from "http2";
import HttpException from "../exceptions/http.exceptions";
import Department from "../entity/department.entity";
import CreateDepartmentDto from "../dto/createdepartment.dto";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import UpdateDepartmentDto from "../dto/updatedepartment.dto";

class DepartmentController {
  public router: express.Router;
  constructor(private departmentService: DepartmentService) {
    this.router = express.Router();

    this.router.get("/", this.getAllDepartment);

    this.router.get("/:id", this.getDepartmentById);

    this.router.post("/", this.createDepartment);

    this.router.put("/:id", this.updateDepartment);

    this.router.delete("/:id", this.deleteDepartment);
  }

  public getAllDepartment = async (
    req: express.Request,
    res: express.Response
  ) => {
    const departments = await this.departmentService.getAllDepartment();
    res.status(200).send(departments);
  };

  public getDepartmentById = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const department = await this.departmentService.getDepartmentById(
        Number(req.params.id)
      );
      if (!department) {
        const error = new HttpException(404, "No Department");
        throw error;
      }
      res.status(200).send(department);
    } catch (err) {
      next(err);
    }
  };

  public createDepartment = async (
    req: express.Request,
    res: express.Response,
    next:express.NextFunction
  ) => {
    try{
      const departmentdto = plainToInstance(CreateDepartmentDto, req.body);
      const errors = await validate(departmentdto);
      if (errors.length) {
        console.log(JSON.stringify(errors));
        throw new HttpException(400, JSON.stringify(errors));
      
      }

    const department = await this.departmentService.createDepartment(
      departmentdto.dept_name,
      departmentdto.dept_head
    );

    res.status(201).send(department);
    }catch(err){
      next(err)
    }
    
  };

  public updateDepartment = async (
    req: express.Request,
    res: express.Response,
    next:express.NextFunction
  ) => {

    try{
      const updateDto = plainToInstance(UpdateDepartmentDto, req.body);
      const errors = await validate(updateDto);
      if (errors.length) {
        console.log(JSON.stringify(errors));
        throw new HttpException(400, JSON.stringify(errors));
      }
      const department = await this.departmentService.updateDepartment(
        Number(req.params.id),
        updateDto.dept_name,
        updateDto.dept_head
      );
  
      res.status(201).send(department);
    }
    catch(err){
      next(err)
    }

    
  };

  public deleteDepartment = async (
    req: express.Request,
    res: express.Response
  ) => {
    const department = await this.departmentService.deleteDepartment(
      Number(req.params.id)
    );
  };
}

export default DepartmentController;
