import { IsNotEmpty, IsString } from "class-validator";

export class Address{
    @IsString()
    @IsNotEmpty()
    line1:string

    @IsString()
    @IsNotEmpty()
    pincode:string

}