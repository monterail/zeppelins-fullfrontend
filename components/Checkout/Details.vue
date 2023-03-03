<template>
  <div>
    <CheckoutDate
      v-model:date="formData.date"
      v-model:count="formData.days"
      class="mb-12"
    />
    <CheckoutInsurance />
    <!-- PILOT LICENSE -->
    <!-- HR -->
    <!-- BUTTONS -->
  </div>
</template>

<script setup lang="ts">
const formData = ref({
  date: new Date().toJSON().slice(0, 10),
  days: 0,
  insurance: undefined,
});
</script>
