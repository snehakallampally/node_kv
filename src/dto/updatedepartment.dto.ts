import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"

export class UpdateDepartmentDto{

    @IsOptional()
    @IsString()
    dept_name:string;

    @IsOptional()
    @IsString()
    dept_head:string


}
export default UpdateDepartmentDto;