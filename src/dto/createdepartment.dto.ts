import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator"

export class CreateDepartmentDto{

    @IsNotEmpty()
    @IsString()
    dept_name:string;

    @IsNotEmpty()
    @IsString()
    dept_head:string


}
export default CreateDepartmentDto;