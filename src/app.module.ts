import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TaskModule } from './task/task.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
    TaskModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => {
      const entities = [__dirname + '/**/*.entity{.ts,.js}'];
      const migrations = [__dirname + '/migrations/*{.ts,.js}'];
      return  {
        entities,
        migrations,
        keepConnectionAlive: true,
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USERNAME'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        ssl: configService.get('POSTGRES_SSL') === 'true' ? {rejectUnauthorized: false} : false,
        migrationsRun: true,
        logging: true,
      }
    }, 
    inject: [ConfigService],
  })],
  controllers: [AppController],
})
export class AppModule {}
