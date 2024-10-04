<template>
  <h2 class="text-center mt-9 text-lg">Details</h2>
  <div v-if="company">
    <UCard class="w-10/12 mr-auto ml-auto">
      <template #header>
        <span  class="font-bold text-xl">
          {{ company.companyName }}
        </span>
      </template>
      
        <div v-for="key in Object.keys(company)">
          <span class="w-56 inline-block">{{ key }}: </span>
          <span v-if="typeof company[key] === 'boolean'">
            {{  company[key] ? 'yes' : 'no' }}
          </span>
          <span v-if="typeof company[key] === 'number'">
            {{  company[key].toLocaleString() }}
          </span>
          <span v-if="typeof company[key] === 'string'">
            {{  company[key] }}
          </span>
        </div>
      <template #footer>
        {{ company.footnote }}
      </template>
    </UCard>
  </div>
  <div v-else>
      Loading...
    </div>
</template>

<script setup lang="ts">
  const route = useRoute()
  const id:string = route.query.id as string;
  const company = useState<ICompanyDetailed>('company');

  const fetchDetailedInfo = async (id: string) => {
    const result = await fetch(`http://localhost:3000/companies/${id}`).then(res => res.json());
    company.value = result as ICompanyDetailed;
  }

  fetchDetailedInfo(id)

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
</script>