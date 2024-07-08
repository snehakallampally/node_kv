import { DataSource, Repository } from "typeorm";
import dataSource from "../db/data-source.db";
import Employee from "../entity/employee.entity";

class EmployeeRepository {
  constructor(private repository: Repository<Employee>) {}
  async find(): Promise<Employee[]> {
    return this.repository.find({ relations: ["address"] });
  }

  async findOneBy(filter: Partial<Employee>): Promise<Employee | null> {
    return this.repository.findOne({ where: filter, relations: ["address"] });
  }

  async save(employee: Employee): Promise<Employee> {
    return this.repository.save(employee);
  }
    async softDelete(id: number): Promise<void> {
      await this.repository.softDelete(id);
    }
  async softRemove(employee: Employee): Promise<void> {
    await this.repository.softRemove(employee);
  }
}
export default EmployeeRepository;
