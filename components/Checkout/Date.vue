<template>
  <div>
    <p class="mb-7 text-2xl">Date</p>
    <div class="w-full flex gap-3">
      <BaseDatePicker
        v-model:date="date"
        @update:date="$emit('update:date', $event)"
      />
      <BaseCounter
        v-model:count="count"
        @update:count="$emit('update:count', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const date = ref('');
const count = ref(0);

defineEmits(['update:date', 'update:count']);
</script>
