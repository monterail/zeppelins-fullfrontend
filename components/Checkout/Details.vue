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
    <hr class="w-full border border-gray-300 mb-12" />
  </div>
</template>

<script setup lang="ts">
defineEmits([
  'update:date',
  'update:days',
  'update:license',
  'update:insurance',
  'submit',
]);
</script>
