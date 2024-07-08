import { Column } from "typeorm/decorator/columns/Column";
import AbstractEntity from "./abstract.entity";
import { Entity, OneToMany } from "typeorm";
import Employee from "./employee.entity";

@Entity()
class Department extends AbstractEntity {
  @Column()
  dept_name: string;

  @Column()
  dept_head: string;

  employees: Employee[];
}

export default Department;
