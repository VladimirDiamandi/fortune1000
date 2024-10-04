<template>
  <h2 class="text-center mt-9 text-lg">Welcome</h2>
  <UVerticalNavigation :links="links" />
</template>

<script setup lang="ts">
const links = [{
  label: 'Search page',
  to: '/search'
}]
</script>