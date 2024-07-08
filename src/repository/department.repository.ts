import { Repository } from "typeorm";
import Department from "../entity/department.entity";

class DepartmentRepository {
  constructor(public repository: Repository<Department>) {}
  async find(): Promise<Department[]> {
    return this.repository.find({});
  }

  async findOneBy(filter: Partial<Department>): Promise<Department | null> {
    return this.repository.findOne({ where: filter, relations: ["Employee"] });
  }

  async save(department: Department): Promise<Department> {
    return this.repository.save(department);
  }
  async softDelete(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }
  async softRemove(department: Department): Promise<void> {
    await this.repository.softRemove(department);
  }
}
export default DepartmentRepository;
