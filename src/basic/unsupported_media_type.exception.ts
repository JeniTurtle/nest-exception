import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';
import { IExceptionOption } from '../exception.inteface';

export abstract class UnsupportedMediaTypeException extends BaseException {
  constructor(data?: IExceptionOption) {
    super(data, HttpStatus.UNSUPPORTED_MEDIA_TYPE);
  }
}
