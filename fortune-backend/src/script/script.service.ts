import { Inject, Injectable } from '@nestjs/common';
import { CompanyService } from 'src/companies/company.service';
import * as fs from 'fs';

@Injectable()
export class ScriptService {
  constructor(
    private readonly companyService: CompanyService,
  ) {}

  async upload(filePath: string) {
    console.log('starting upload', filePath)
    const rawText = fs.readFileSync(filePath, 'utf-8');
    const lines = rawText.split('\n')
    for (let pos = 1; pos < lines.length; pos++) {
      const item = this.parseLine(lines[pos]);
      if (item.length > 1) {
        await this.insertOne(item);
      }
    }
    console.log('upload completed');
  }

  parseLine(line: string) {
    let currentLine = line;
    const items: string[] = [];
    let comaPos = -1;
    do {
      comaPos = currentLine.indexOf(',');
      const quotesPos = currentLine.indexOf('"');
      if ((comaPos < quotesPos || quotesPos === -1) && comaPos > -1) {
        const item = currentLine.substring(0, comaPos);
        items.push(item);
        currentLine = currentLine.substring(comaPos + 1);
      } else if (quotesPos > -1) {
        const nextQuotesPos = currentLine.substring(1).indexOf('"');
        const item = currentLine.substring(1, nextQuotesPos + 1);
        items.push(item);
        currentLine = currentLine.substring(nextQuotesPos + 3);
      } else {
        items.push(currentLine);
      }
    } while (comaPos > -1);
    return items;
  }

  async insertOne(row: string[]) {
    await this.companyService.insert({
      rank: parseInt(row[0]),
      companyName: row[1],
      ticker: row[2] || null,
      sector: row[3],
      industry: row[4],
      profitable: row[5] === 'yes',
      founderIsCeo: row[6] === 'yes',
      femaleCeo: row[7] === 'yes',
      growsInJobs: row[8] === 'yes',
      changeInRank: row[9].length ? parseInt(row[9]) : null,
      gainedInRank: row[10] === 'yes',
      droppedInRank: row[11] === 'yes',
      newcomer: row[12] === 'yes',
      global500: row[13] === 'yes',
      worldMostAdmired: row[14] === 'yes',
      bestToWork: row[15] === 'yes',
      numberEmployees: row[16].length ? parseInt(row[16]): null,
      marketCapNumber: row[17].length ? parseFloat(row[17]) : null,
      revenue: row[18].length ? parseFloat(row[18]) : null,
      revenuePercentChange: row[19].length ? parseFloat(row[19]) : null,
      profits: row[20].length ? parseFloat(row[20]) : null,
      profitsPercentChange: row[21].length ? parseFloat(row[21]) : null,
      assets: row[22].length ? parseFloat(row[22]) : null,
      ceo: row[23],
      country: row[24],
      city: row[25],
      state: row[26],
      website: row[27],
      companyType: row[28],
      footnote: row[29],
      marketCap: row[30].length ? parseFloat(row[30]) : null,
      updated: new Date(row[31])
    })
  }
}