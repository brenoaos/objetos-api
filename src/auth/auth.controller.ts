import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { AuthService } from './auth.service';
import { UsuarioEntity } from 'src/modulos/usuario/usuario.entity';

@Controller('auth')
export class AuthController {

    constructor(private service: AuthService) { }

    @Post('/singup')
    async singup(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<UsuarioEntity> {

        return await this.service.singUp(authCredentialsDto);

    }

}
