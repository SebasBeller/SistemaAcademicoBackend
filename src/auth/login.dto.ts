import { IsEmail, IsString, MinLength, IsNotEmpty,MaxLength,Matches,Length } from 'class-validator';
import {AppConstants} from '../constants';
export class LoginDto {
  @IsEmail({},AppConstants.LOGIN_MESSAGE_ERROR)
  @IsNotEmpty(AppConstants.LOGIN_MESSAGE_ERROR)
  email: string;

  @IsString(AppConstants.LOGIN_MESSAGE_ERROR)
  @Length(8, 15, AppConstants.LOGIN_MESSAGE_ERROR)
  @IsNotEmpty(AppConstants.LOGIN_MESSAGE_ERROR)
  password: string;
}
