import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // validation decorator(IsString, IsNumber etc)를 사용하지 않는 속성의 유효성 검사 (반환 된) 개체를 제거한다.
      forbidNonWhitelisted: true, // 화이트리스트에 없는 property validator를 제거하는 대신 예외가 발생한다.
      transform: true, // data type 변환
    }),
  );
  await app.listen(3000);
}
bootstrap();
