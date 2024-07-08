import Address from "../entity/address.entity";
import Department from "../entity/department.entity";
import Employee from "../entity/employee.entity";
import HttpException from "../exceptions/http.exceptions";
import EmployeeRepository from "../repository/employee.repository";
import { JWT_SECRET, JWT_VALIDITY } from "../utils/constant";
import { jwtPayload } from "../utils/jwtPayload";
import { Role } from "../utils/role.enum";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

class EmployeeService {
  constructor(private employeeRepository: EmployeeRepository) {}

  async loginEmployee(email: string, password: string) {
    const employee = await this.employeeRepository.findOneBy({
      email,
    });
    if (!employee) {
      throw new HttpException(401, "employee not found");
    }
    const result = await bcrypt.compare(password, employee.password);

    if (!result) {
      throw new HttpException(401, "invalid credentials");
    }
    const payload: jwtPayload = {
      name: employee.name,
      email: employee.email,
      role: employee.role,
    };

    const token = jsonwebtoken.sign(payload, JWT_SECRET, {
      expiresIn: JWT_VALIDITY,
    });
    return token;
  }

  async getAllEmployees() {
    return this.employeeRepository.find();
  }

  async getEmployeeById(id: number) {
    return this.employeeRepository.findOneBy({ id });
  }

  async createEmployee(
    name: string,
    email: string,
    age: number,
    password: string,
    role: Role,
    dept:number,
    address: any
  ) {
    const newEmployee = new Employee();
    newEmployee.name = name;
    newEmployee.email = email;
    newEmployee.age = age;
    newEmployee.password = password ? await bcrypt.hash(password, 10) : "";
    newEmployee.role = role;
    newEmployee.department_id=dept;

    const newAddress = new Address();
    newAddress.line1 = address.line1;
    newAddress.pincode = address.pincode;

    newEmployee.address = newAddress;

    return this.employeeRepository.save(newEmployee);
  }

  async updateEmployee(
    id: number,
    name: string,
    email: string,
    age: number,
    password: string,
    role: Role,
    dept:number,
    address: any
  ) {
    const newEmployee = await this.employeeRepository.findOneBy({ id });
    newEmployee.name = name;
    newEmployee.email = email;
    newEmployee.age = age;
    newEmployee.password = password;
    newEmployee.role = role;
    newEmployee.department_id=dept;

    const newAddress = new Address();
    newAddress.line1 = address.line1;
    newAddress.pincode = address.pincode;

    newEmployee.address = newAddress;
    return this.employeeRepository.save(newEmployee);
  }

  async deleteEmployee(id: number) {
    const newEmployee = await this.employeeRepository.findOneBy({ id });
    return this.employeeRepository.softRemove(newEmployee);
  }
}
export default EmployeeService;