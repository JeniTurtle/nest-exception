import { HttpException, HttpStatus } from '@nestjs/common';
import { IExceptionOption, IBaseException } from '../exception.inteface';

class Exception extends HttpException {
  private readonly _msg: string;
  public readonly code: number;
  public error: string | null = null;

  get msg() {
    return this.message;
  }

  set msg(msg: string) {
    if (!this._msg) {
      this.message = msg;
    }
  }
  constructor(data: IExceptionOption = {}, status: HttpStatus) {
    super(
      {
        message: data.msg,
        ...data,
      },
      status,
    );
    data.msg && (this._msg = data.msg);
    data.error && (this.error = data.error);
  }
}

export abstract class BaseException extends Exception
  implements IBaseException {
  constructor(data: IExceptionOption, status: HttpStatus) {
    super(data, status);
  }
  abstract readonly code: number;
  abstract readonly msg: string;
}
