<template>
  <h1 class="mb-11">Checkout</h1>
  <div class="mb-80 grid grid-cols-2 gap-x-72">
    <CheckoutDetails
      @update:date="handleDate"
      @update:days="handleDays"
      @update:insurance="handleInsurance"
      @update:license="handleLicense"
      @submit="handleSubmit"
    />
    <CheckoutSummary :order="formData" />
    <div class="flex justify-between">
      <BaseButton
        arrow="left"
        variant="text"
      >
        Back
      </BaseButton>
      <BaseButton
        arrow="right"
        :disabled="!formValid"
        @click="handleSubmit"
      >
        Book
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Order } from '~/types/order';
import { RadioOption } from '~/types/radio-options';

const { data: userProfile } = useUserProfile();

const hasLicense = computed(() => {
  const currentLicense = userProfile.value?.current_license?.split('/')[1];
  return currentLicense || null;
});

const formData: Order = reactive({
  date: null,
  days: 1,
  license: null,
  insurance: null,
});

const handleDate = (e: string) => (formData.date = e);
const handleDays = (e: number) => (formData.days = e);
const handleInsurance = (e: RadioOption) => (formData.insurance = e);
const handleLicense = (e: File) => (formData.license = e);

const formValid = computed(() => {
  return !!(
    formData.date &&
    formData.days &&
    (hasLicense || formData.license) &&
    formData.insurance
  );
});

const handleSubmit = (e: Event) => {
  e.preventDefault();
  formValid.value
    ? console.warn('order', formData)
    : console.error('Please fill in the form correctly');
};
</script>
