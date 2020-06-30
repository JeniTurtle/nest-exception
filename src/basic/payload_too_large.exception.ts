import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';
import { IExceptionOption } from '../exception.inteface';

export abstract class PayloadTooLargeException extends BaseException {
  constructor(data?: IExceptionOption) {
    super(data, HttpStatus.PAYLOAD_TOO_LARGE);
  }
}
