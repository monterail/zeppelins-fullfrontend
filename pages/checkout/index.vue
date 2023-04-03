<template>
  <h1 class="mb-11">Checkout</h1>
  <div class="mb-80 grid grid-cols-2 gap-x-72">
    <CheckoutDetails
      @update:date="handleDate"
      @update:days="handleDays"
      @update:insurance="handleInsurance"
      @update:license="handleLicense"
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
        @click.prevent="handleSubmit"
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
const { mutate: updateLicense } = useUserProfileUpdate();
const { mutate: insertReservation, isSuccess: reservationSuccess } =
  useInsertReservation();

const hasLicense = computed(() => {
  const currentLicense = userProfile.value?.current_license?.split('/')[1];
  return currentLicense || null;
});

const formData: Order = reactive({
  userId: userProfile.value?.id || null,
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
    formData.userId &&
    formData.date &&
    formData.days &&
    (hasLicense || formData.license) &&
    formData.insurance
  );
});

const handleSubmit = async () => {
  if (formValid.value) {
    const orderData = {
      ...formData,
      insurance: formData.insurance?.id,
      status: 'pending',
    };
    if (formData.license?.name)
      await updateLicense({
        profileName: userProfile.value?.id,
        file: formData.license,
      });

    await insertReservation(orderData);
    if (reservationSuccess) return navigateTo('/confirmation');
  } else {
    console.error('Please fill in the form correctly');
  }
};
</script>
