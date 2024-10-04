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
  async search(@Query() query: SearchCompaniesDto) {
    const search = query.search;
    const limit = query.limit || 20;
    const skip= query.skip || 0;
    const companies = await this.companyService.search({
      search,
      skip,
      limit
    });

    const { count } = await this.companyService.count(search);

    return {
      companies,
      total: count
    }
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Company> {
    return this.companyService.findOne(id);
  }
}