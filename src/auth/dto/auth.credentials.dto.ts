import { IsAlpha, MinLength, MaxLength, IsEmail } from 'class-validator';

export class AuthCredentialsDto {

    @MinLength(6, {
        message: 'O "usuario" deverá ter minimo de 6 carateres.',
    })
    @MaxLength(20, {
        message: 'O "usuario" deverá ter maximo de 20 caractes',
    })
    nomeUsuario?: string;

    @IsEmail({
        allow_display_name: true,
    }, {
        message: 'Email invalido.',
    })
    email?: string;

    @MinLength(6, {
        message: 'A senha deverá ter minimo de 6 carateres.',
    })
    @MaxLength(20, {
        message: 'A senha deverá ter maximo de 20 caractes',
    })
    senha: string;
}
