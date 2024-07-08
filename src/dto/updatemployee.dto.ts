import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { Role } from "../utils/role.enum";
import { Address } from "./address.dto";

export default class UpdateEmployeeDto{
    @IsOptional()
    @IsString()
    name:string

    @IsOptional()
    @IsEmail()
    email:string

    @IsOptional()
    @IsNumber()
    age:number

    @IsOptional()
    @IsString()
    password:string

    @IsOptional()
    @IsEnum(Role)
    role:Role

    @IsNotEmpty()
    @IsNumber()
    department_id:number

    @IsOptional()
    @ValidateNested({each:true})
    address:Address
}