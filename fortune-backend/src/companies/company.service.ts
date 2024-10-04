import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/createCompany.dto';
import { ISearchPayload } from './dto/interfaces';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async insert(createCompanyDto: CreateCompanyDto) {
    return await this.companyRepository.insert({
      ...createCompanyDto
    })
  }

  async findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  findOne(id: number): Promise<Company> {
    return this.companyRepository.findOneBy({ id: id });
  }

  async search(payload: ISearchPayload) {
    const { limit, search, skip } = payload;
    return this.companyRepository
      .createQueryBuilder()
      .where("companyName LIKE :search", { search: `%${search}%` })
      .select([
        "id",
        "ceo",
        "companyName",
        "companyType",
        "country",
        "city",
        "state",
        "marketCap",
        "numberEmployees",
        "profitable",
        "profits",
        "revenue",
        "sector",
        "ticker",
        "industry",
        "website"
      ])
      .skip(skip)
      .take(limit)
      .execute()
  }

  async count(search: string) {
    return this.companyRepository
      .createQueryBuilder()
      .where("companyName LIKE :search", { search: `%${search}%` })
      .select("COUNT(id)", "count")
      .getRawOne()
  }
}