import { Module } from '@nestjs/common';
import { ScriptService } from './script.service';
import { CompanyModule } from 'src/companies/company.module';
import { CompanyService } from 'src/companies/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from '../companies/company.entity';

@Module({
  imports: [CompanyModule, TypeOrmModule.forFeature([Company])],
  providers: [ScriptService, CompanyService],
  exports: [ScriptService]
})
export class ScriptModule { }