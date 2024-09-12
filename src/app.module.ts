import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { PrismaService } from './prisma.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './common/interceptors/loggin.interceptor';

@Module({
  imports: [ItemsModule],
  providers: [
    PrismaService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
