import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';
import { IExceptionOption } from '../exception.inteface';

export abstract class BadGatewayException extends BaseException {
  constructor(data?: IExceptionOption) {
    super(data, HttpStatus.BAD_GATEWAY);
  }
}
