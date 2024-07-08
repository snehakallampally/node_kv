import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator"
import { Address } from "./address.dto"
import { Role } from "../utils/role.enum"

export class CreateEmployeeDto{

    @IsNotEmpty()
    @IsString()
    name:string

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email:string

    @IsNotEmpty()
    @IsNumber()
    age:number

    @IsNotEmpty()
    @IsString()
    password:string

    @IsNotEmpty()
    @IsEnum(Role)
    role:Role

    @IsNotEmpty()
    @IsNumber()
    department_id:number

    @IsNotEmpty()
    @ValidateNested({each:true})
    address:Address

}