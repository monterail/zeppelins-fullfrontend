<template>
  <h1 class="mb-11">Checkout</h1>
  <div class="grid grid-cols-2 gap-x-72 mb-80">
    <CheckoutDetails
      @update:date="handleDate"
      @update:days="handleDays"
      @update:insurance="handleInsurance"
      @update:license="handleLicense"
    />
    <CheckoutSummary :order="formData" />
  </div>
</template>

<script setup lang="ts">
import { Order } from '~/types/order';
import { RadioOption } from '~/types/radio-options';

const handleDate = (e: string) => (formData.date = e);
const handleDays = (e: number) => (formData.days = e);
const handleInsurance = (e: RadioOption) => (formData.insurance = e);
const handleLicense = (e: File) => (formData.license = e);

const formData: Order = reactive({
  date: null,
  days: null,
  license: null,
  insurance: null,
});
</script>
