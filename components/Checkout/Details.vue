<template>
  <div>
    <CheckoutDate
      v-model:date="formData.date"
      v-model:count="formData.days"
      class="mb-12"
    />
    <CheckoutInsurance
      v-model:insurance="formData.insurance"
      class="mb-12"
    />
    <LicenseUpload class="mb-12" />
    <hr class="w-full border bg-gray-200 mb-12" />
    <div class="flex justify-between">
      <BaseButton
        arrow="left"
        variant="text"
      >
        Back
      </BaseButton>
      <BaseButton arrow="right">Book</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import LicenseUpload from './LicenseUpload.vue';

const emit = defineEmits('update:form-data');

const formData = ref({
  date: new Date().toJSON().slice(0, 10),
  days: 0,
  insurance: undefined,
});

watch(
  formData,
  (newVal) => {
    emit('update:form-data', newVal);
  },
  { deep: true },
);
</script>
