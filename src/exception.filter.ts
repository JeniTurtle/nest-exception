import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import {
  IErrorResponse,
  BaseException,
  SystemException,
  PageNotFoundException,
} from './';

/**
 * @class HttpExceptionFilter
 * @classdesc 拦截全局抛出的所有异常，同时任何错误将在这里被规范化输出 THttpErrorResponse
 */
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger: Logger = new Logger(HttpExceptionFilter.name);

  private renderError(response, exception: BaseException, status: HttpStatus) {
    const errorResp: IErrorResponse = {
      code: exception.code,
      msg: exception.message,
      error: exception.error,
    };
    return response.code(status).send(errorResp);
  }

  catch(exception: BaseException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const status = exception.getStatus ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    try {
      this.logger.error(exception.stack || exception.message);
      // 对默认的404进行处理
      if (status === HttpStatus.NOT_FOUND) {
        exception = new PageNotFoundException();
      }
      if (!Number(exception.code)) {
        exception = new SystemException({
          error: exception.message,
        });
      }
      return this.renderError(response, exception, status);
    } catch (err) {
      return this.renderError(
        response,
        new SystemException({
          error: err.message,
        }),
        status,
      );
    }
  }
}
