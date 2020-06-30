import { Global, Module } from '@nestjs/common';
import { HttpExceptionFilter } from './exception.filter';

@Global()
@Module({})
export class ExceptionModule {
  static forRoot() {
    return {
      providers: [HttpExceptionFilter],
      exports: [HttpExceptionFilter],
    }
  }
}
