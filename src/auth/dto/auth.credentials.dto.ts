import { IsAlpha, MinLength, MaxLength, IsEmail, Allow } from 'class-validator';
import { IsNull } from 'typeorm';

export class AuthCredentialsDto {
    nomeUsuario?: string;
    email?: string;
    senha: string;
}
