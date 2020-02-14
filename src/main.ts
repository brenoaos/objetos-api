import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });

  app.enableCors();
  app.useGlobalGuards()
  const options = new DocumentBuilder()

    .setTitle('Object Control')
    .setDescription('Api para sistema de controle de objetos')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('rotas', app, document);

  await app.listen(process.env.PORT || 3000);

  // tslint:disable-next-line: no-console
  console.log(`APP iniciado na porta ` + (process.env.PORT || 3000));
}
bootstrap();
