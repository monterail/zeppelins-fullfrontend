<template>
  <div>
    <p class="mb-7 text-2xl">Date</p>
    <div class="w-full flex gap-3">
      <BaseDatePicker v-model:date="date" />
      <BaseCounter v-model:count="count" />
    </div>
  </div>
</template>

<script setup lang="ts">
const date = ref('');
const count = ref(0);

const emit = defineEmits(['update:date', 'update:count']);

watch(date, (newVal, oldVal) => {
  emit('update:date', newVal);
});
watch(count, (newVal, oldVal) => {
  emit('update:count', newVal);
});
</script>
