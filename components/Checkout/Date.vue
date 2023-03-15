<template>
  <div>
    <p class="mb-7 text-2xl">Date</p>
    <div class="w-full flex gap-3">
      <BaseDatePicker @update:date="$emit('update:date', $event)" />
      <BaseCounter @update:count="$emit('update:days', $event)" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['update:date', 'update:days']);
</script>
