import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import AbstractEntity from "./abstract.entity";
import Address from "./address.entity";
import { Role } from "../utils/role.enum";
import Department  from "./department.entity";

@Entity() //@ decorators
class Employee extends AbstractEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  role: Role;

  @Column()
  department_id:number;

  @OneToOne(() => Address, (address) => address.employee, {
    cascade: true,
  })
  address: Address;

  @ManyToOne(()=>Department,(department)=> department.employees)
  @JoinColumn()
  department:Department;
  
}

export default Employee;
