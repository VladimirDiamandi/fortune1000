import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './companies/company.module';
import { ScriptModule } from './script/script.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'fortune',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CompanyModule,
    ScriptModule,
  ],
})
export class AppModule {}
