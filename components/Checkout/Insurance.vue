<template>
  <div v-loading="isLoading">
    <p class="mb-7 text-2xl">Insurance</p>
    <BaseRadioGroup
      v-if="insuranceOptions"
      v-model:selected="selectedInsurance"
      :options="insuranceOptions"
      @update:selected="$emit('update:insurance', $event)"
    />
  </div>
</template>

<script setup lang="ts">
defineEmits(['update:insurance']);

const { data: insuranceOptions, isLoading } = useInsuranceOptions();
const selectedInsurance = ref(
  insuranceOptions.value ? insuranceOptions.value[0] : null,
);
</script>
