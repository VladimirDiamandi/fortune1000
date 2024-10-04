import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int', unsigned: true})
  rank: number;

  @Column()
  companyName: string;

  @Column({ nullable: true})
  ticker?: string;

  @Column()
  sector: string;

  @Column()
  industry: string;

  @Column()
  profitable: boolean;

  @Column()
  founderIsCeo: boolean;

  @Column()
  femaleCeo: boolean;

  @Column()
  growsInJobs: boolean;

  @Column({ type: 'int', nullable: true})
  changeInRank?: number;

  @Column()
  gainedInRank: boolean;
  
  @Column()
  droppedInRank: boolean;

  @Column()
  newcomer: boolean;

  @Column()
  global500: boolean;

  @Column()
  worldMostAdmired: boolean;

  @Column()
  bestToWork: boolean;

  @Column({ type: 'bigint', unsigned: true})
  numberEmployees: number;

  @Column({ type: 'float', nullable: true })
  marketCapNumber?: number;

  @Column({ type: 'float', nullable: true})
  revenue?: number;

  @Column({ type: 'float', nullable: true })
  revenuePercentChange?: number;

  @Column({ type: 'float', nullable: true})
  profits?: number;

  @Column({ type: 'float', nullable: true})
  profitsPercentChange?: number;

  @Column({ type: 'float', nullable: true})
  assets?: number;

  @Column()
  ceo: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  website: string;

  @Column()
  companyType: string;

  @Column({ type: 'text'})
  footnote: string;

  @Column({ type: 'float', nullable: true})
  marketCap?: number;

  @Column()
  updated: Date;
}