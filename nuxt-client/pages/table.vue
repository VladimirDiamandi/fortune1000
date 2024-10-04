<template>
  <h2 class="text-center mt-9 text-lg">Table</h2>
  <UTable :rows="people" :columns="columns">
    <template #name-data="{ row }">
      <span>{{ row.name }}</span>
    </template>
    <template #actions-data="{ row }">
      <UButton color="gray" variant="ghost" icon="i-heroicons-light-bulb" @click="() => onSelect(row.id)"/>
    </template>
  </UTable>
</template>

<script setup lang="ts">
const route = useRoute()
const search = route.query.search;
console.log('search', search)

interface ICompanyShort {
  id: number,
  ceo: string,
  companyName: string,
  companyType: string,
  industry: string,
  location: string,
  marketCapNumber: number,
  profitable: boolean,
  profits: number,
  revenue: number,
  sector: string,
  ticker: string,
  website: string,
}

const people: ICompanyShort[] = [{
  id: 1,
  ceo: 'C. Douglas McMillon',
  companyName: 'Walmart',
  companyType: 'Public',
  industry: 'General Merchandisers',
  location: 'U.S.',
  marketCapNumber: 484852.8,
  profitable: true,
  profits: 15511.0,
  revenue: 648125.0,
  sector: 'Retailing',
  ticker: 'WMT',
  website: 'https://www.stock.walmart.com',
},{
  id: 2,
  ceo: 'Andrew R. Jassy',
  companyName: 'Amazon',
  companyType: 'Public',
  industry: 'Internet Services and Retailing',
  location: 'U.S.',
  marketCapNumber: 1873675.8,
  profitable: true,
  profits: 30425.0,
  revenue: 574785.0,
  sector: 'Retailing',
  ticker: 'AMZN',
  website: 'https://www.amazon.com',
}]

const columns = [{
  key: 'id',
  label: 'ID'
},{
  key: 'ceo',
  label: 'CEO'
}, {
  key: 'companyName',
  label: 'Company name'
}, {
  key: 'companyType',
  label: 'Company Type (Private or Public)'
}, {
  key: 'industry',
  label: 'Industry'
}, {
  key: 'location',
  label: 'Location'
}, {
  key: 'marketCapNumber',
  label: 'Market CapNumber of Employees'
}, {
  key: 'profitable',
  label: 'Profitable'
}, {
  key: 'profits',
  label: 'Profits'
}, {
  key: 'revenue',
  label: 'Revenue'
}, {
  key: 'sector',
  label: 'Sector'
}, {
  key: 'ticker',
  label: 'Ticker'
}, {
  key: 'website',
  label: 'website'
}, {
  key: 'actions',
  label: 'Detailed Info'
}]

async function onSelect(id: string) {
    await navigateTo(`/details?id=${id}`);
  }
</script>