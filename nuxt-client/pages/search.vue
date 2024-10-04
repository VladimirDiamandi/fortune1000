<template>
  <h2 class="text-center mt-9 text-lg">Search</h2>
  <UCard class="w-96 ml-auto mr-auto">
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Search for" name="search">
        <UInput v-model="state.search" />
      </UFormGroup>

      <UButton type="submit" block>
        Search
      </UButton>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
  import { object, string, type InferType } from 'yup'
  import type { FormSubmitEvent } from '#ui/types'

  const schema = object({
    search: string().min(1).max(50).required('Required'),
  })

  type Schema = InferType<typeof schema>

  const state = reactive({
    search: '',
  })

  async function onSubmit (event: FormSubmitEvent<Schema>) {
    console.log(event.data.search)
    await navigateTo(`/table?search=${event.data.search}`);
  }
</script>