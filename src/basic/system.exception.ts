import { NotFoundException, InternalServerErrorException } from './';
import { ApiException } from './api.exception';

export class SystemException extends InternalServerErrorException {
  readonly code: number = 100001;
  readonly msg: string = '系统异常';
}

export class PageNotFoundException extends NotFoundException {
  readonly code: number = 100002;
  readonly msg: string = '请求资源不存在';
}

export class ParamValidateException extends ApiException {
  readonly code: number = 100003;
  readonly msg: string = '参数校验失败';
}
