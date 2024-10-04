<template>
  <h2 class="text-center mt-9 text-lg">Details</h2>
  <UCard class="w-10/12 mr-auto ml-auto">
    <template #header>
      <span  class="font-bold text-xl">
        {{ company.companyName }}
      </span>
    </template>
    <div v-for="key in Object.keys(onlyDetails)">

      <span class="w-56 inline-block">{{ key }}: </span>
      <span v-if="typeof onlyDetails[key] === 'boolean'">
        {{  onlyDetails[key] ? 'yes' : 'no' }}
      </span>
      <span v-if="typeof onlyDetails[key] === 'number'">
        {{  onlyDetails[key].toLocaleString() }}
      </span>
      <span v-if="typeof onlyDetails[key] === 'string'">
        {{  onlyDetails[key] }}
      </span>
    </div>

    <template #footer>
      {{ company.footnote }}
    </template>
  </UCard>
</template>

<script setup lang="ts">
  const route = useRoute()
  const id = route.query.id;
  console.log('id', id)
  interface ICompanyDetailed {
    id: number;
    rank: number;
    companyName: string;
    ticker: string;
    sector: string;
    industry: string;
    profitable: boolean;
    founderIsCeo: boolean;
    femaleCeo: boolean;
    growsInJobs: boolean;
    changeInRank: number;
    gainedInRank: boolean;
    droppedInRank: boolean;
    newcomer: boolean;
    global500: boolean;
    worldMostAdmired: boolean;
    bestToWork: boolean;
    numberEmployees: number;
    marketCapNumber: number;
    revenue: number;
    revenuePercentChange: number;
    profits: number;
    profitsPercentChange?: number;
    assets: number;
    ceo: string;
    country: string;
    city: string;
    state: string;
    website: string;
    companyType: string;
    footnote: string;
    marketCap: number;
    updated: string;
  }

  const company: ICompanyDetailed = {
    id: 1,
    rank: 1,
    companyName: 'Walmart',
    ticker: 'WMT',
    sector: 'Retailing',
    industry: 'General Merchandisers',
    profitable: true,
    founderIsCeo: false,
    femaleCeo: false,
    growsInJobs: false,
    changeInRank: 0,
    gainedInRank: false,
    droppedInRank: false,
    newcomer: false,
    global500: true,
    worldMostAdmired: true,
    bestToWork: true,
    numberEmployees: 2100000,
    marketCapNumber: 484852.8,
    revenue: 648125.0,
    revenuePercentChange: 6.0,
    profits: 15511.0,
    profitsPercentChange: 32.8,
    assets: 252399.0,
    ceo: 'C. Douglas McMillon',
    country: 'U.S.',
    city: 'Bentonville',
    state: 'Arkansas',
    website: 'https://www.stock.walmart.com',
    companyType: 'Public',
    footnote: 'Figures are for fiscal year ended Jan. 31, 2024. Market value as of July 15, 2024.',
    marketCap: 559911.0,
    updated: '2024-08-05'
  }

  const onlyDetails: any = {...company};
  delete onlyDetails.companyName;
  delete onlyDetails.footnote;
  delete onlyDetails.id
</script>