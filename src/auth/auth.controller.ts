import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { AuthService } from './auth.service';
import { UsuarioEntity } from 'src/modulos/usuario/usuario.entity';

@Controller('auth')
export class AuthController {

    constructor(private service: AuthService) { }

    @Post('/signup')
    signup(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {

        return this.service.signUp(authCredentialsDto);

    }

    @Post('/signin')
    signin(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> {

        return this.service.signIn(authCredentialsDto);

    }

}
