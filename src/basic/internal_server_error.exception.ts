import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';
import { IExceptionOption } from '../exception.inteface';

export abstract class InternalServerErrorException extends BaseException {
  constructor(data?: IExceptionOption) {
    super(data, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
