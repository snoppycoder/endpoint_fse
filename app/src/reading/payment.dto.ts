import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber } from "class-validator";

export class PaymentMethodDto{


    @IsPhoneNumber('ET')
    phoneNumber?:string

    
    
    @IsEmail()
    email?:string

    @IsNotEmpty()
    CustomerId: string
}
