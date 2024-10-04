<template>
  <h2 class="text-center mt-9 text-lg">Table</h2>
  <UTable :rows="people" :columns="columns" class="scroll-auto">
    <template #name-data="{ row }">
      <span>{{ row.name }}</span>
    </template>
    <template #actions-data="{ row }">
      <UButton color="gray" variant="ghost" icon="i-heroicons-light-bulb" @click="() => onSelect(row.id)"/>
    </template>
  </UTable>
</template>

<script setup lang="ts">
let skip = 0;
let limit = 20;
const people = useState('people', () => []);
const fetchSearch = async (search: string) => {
  const result =await fetch(
    encodeURI(`http://localhost:3000/companies/?search=${search}&skip=${skip}&limit=${limit}`),
    { headers: { 'Content-Type': 'application/json'}})
    .then(res=> res.json());
  people.value = result.map((item:any) => ({
    ...item,
    location: `${item.city} ${item.state} ${item.country}`,
    profitable: item.profitable ? 'yes' : 'no'
  }));
}

const route = useRoute()
const search:string = route.query.search as string;

fetchSearch(search)

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
},{
  key: 'numberEmployees',
  label: 'Number of employees'
},
 {
  key: 'location',
  label: 'Location'
}, {
  key: 'marketCap',
  label: 'Market Cap'
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