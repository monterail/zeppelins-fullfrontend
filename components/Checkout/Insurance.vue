<template>
  <div>
    <p class="mb-7 text-2xl">Insurance</p>
    <BaseRadioGroup
      v-model:selected="selectedInsurance"
      :options="insuranceOptions"
      :plans="insuranceOptions"
      @update:selected="$emit('update:insurance', $event)"
    />
  </div>
</template>

<script setup lang="ts">
defineEmits(['update:insurance']);

// TODO: replace wit API data
const insuranceOptions = ref([
  {
    id: 1,
    title: 'No Insurance',
    description: "Don't tell us we didn't warn you",
    detail: '0',
  },
  {
    id: 2,
    title: 'Basic Insurance',
    description: 'Just the basics, better be careful anyway',
    detail: '99',
  },
  {
    id: 3,
    title: 'Full Insurance',
    description: 'Safe from everything, including sharnados',
    detail: '199',
  },
]);

// This needs to be passed to radio group, always first item of array
const selectedInsurance = ref(insuranceOptions.value[0]);
</script>
