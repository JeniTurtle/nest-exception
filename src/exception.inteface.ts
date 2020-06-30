import { HttpException } from '@nestjs/common';

export interface IExceptionOption {
  msg?: string;
  error?: any;
}

export interface IErrorResponse {
  code: number;
  msg: string;
  error: any;
}

export interface IBaseException extends HttpException {
  code: number;
  msg: string;
  error: any;
}

export interface BaseExceptionConstructor {
  new (options?: IExceptionOption): IBaseException;
}
