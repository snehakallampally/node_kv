import Department from "../entity/department.entity";
import DepartmentRepository from "../repository/department.repository";

class DepartmentService {
  constructor(private departmentRepository: DepartmentRepository) {}

  async getAllDepartment() {
    return this.departmentRepository.find();
  }

  async getDepartmentById(id: number) {
    return this.departmentRepository.findOneBy({ id });
  }

  async createDepartment(name: string, head: string) {
    const newDept = new Department();
    newDept.dept_name = name;
    newDept.dept_head = head;

    return this.departmentRepository.save(newDept);
  }

  async updateDepartment(id: number, name: string, head: string) {
    const updateDept = await this.departmentRepository.findOneBy({ id });
    updateDept.dept_name = name;
    updateDept.dept_head = head;

    return this.departmentRepository.save(updateDept);
  }

  async deleteDepartment(id: number) {
    const deleteDept = await this.departmentRepository.findOneBy({ id });
    return this.departmentRepository.softRemove(deleteDept);
  }
}
export default DepartmentService;
