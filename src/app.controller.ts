import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiHideProperty, ApiUnauthorizedResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiUnauthorizedResponse()
  getHello(): string {
    return this.appService.getHello();
  }
}
