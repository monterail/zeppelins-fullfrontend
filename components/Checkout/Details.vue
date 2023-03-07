<template>
  <div>
    <CheckoutDate
      class="mb-12"
      @update:date="$emit('update:date', $event)"
      @update:days="$emit('update:days', $event)"
    />
    <CheckoutInsurance
      class="mb-12"
      @update:insurance="$emit('update:insurance', $event)"
    />
    <CheckoutLicenseUpload
      class="mb-12"
      @update:license="$emit('update:license', $event)"
    />
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
defineEmits([
  'update:date',
  'update:days',
  'update:license',
  'update:insurance',
]);
</script>
