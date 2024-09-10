import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const { method, url } = req;
    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        const time = Date.now() - now;
        this.logger.log(`${method} ${url} - Request handled in ${time}ms`);
      }),
      catchError(error => {
        const time = Date.now() - now;
        this.logger.error(
          `${method} ${url} - Request failed after ${time}ms with error: ${error.message}`,
        );
        throw error;
      }),
    );
  }
}
