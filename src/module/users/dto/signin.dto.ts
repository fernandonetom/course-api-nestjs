import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class SigninDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  readonly password: string;
}
