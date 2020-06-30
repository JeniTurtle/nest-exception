import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';
import { IExceptionOption } from '../exception.inteface';

export abstract class ServiceUnavailableException extends BaseException {
  constructor(data?: IExceptionOption) {
    super(data, HttpStatus.SERVICE_UNAVAILABLE);
  }
}
