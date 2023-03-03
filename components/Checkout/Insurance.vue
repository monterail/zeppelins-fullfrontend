<template>
  <p class="mb-7 text-2xl">Insurance</p>
  <BaseRadioGroup
    v-model:option="selectedInsurance"
    :options="insuranceOptions"
    :plans="insuranceOptions"
  />
</template>

<script setup lang="ts">
// defineEmits([]);

const insuranceOptions = ref([
  {
    id: 1,
    title: 'No Insurance',
    description: "Don't tell us we didn't warn you",
  },
  {
    id: 2,
    title: 'Basic Insurance',
    description: 'Just the basics, better be careful anyway',
  },
  {
    id: 3,
    title: 'Full Insurance',
    description: 'Safe from everything, including sharnados',
  },
]);
const selectedInsurance = ref(insuranceOptions.value[0]);
</script>
