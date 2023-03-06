<template>
  <div>
    <p class="mb-7 text-2xl">Insurance</p>
    <BaseRadioGroup
      v-model:option="selectedInsurance"
      :options="insuranceOptions"
      :plans="insuranceOptions"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:insurance']);

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

const selectedInsurance = ref(insuranceOptions.value[0]);

watch(selectedInsurance.value, (newVal, oldVal) => {
  emit('update:insurance', newVal);
});
</script>
