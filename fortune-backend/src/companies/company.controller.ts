import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { Company } from './company.entity';
import { SearchCompaniesDto } from './dto/searchCompanies.dto';
import { CompanyService } from './company.service';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  search(@Query() query: SearchCompaniesDto): Promise<Company[]> {
    const search = query.search;
    const limit = query.limit || 20;
    const skip= query.skip || 0;
    return this.companyService.search({
      search,
      skip,
      limit
    });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Company> {
    return this.companyService.findOne(id);
  }
}