<template>
  <div class="rounded-lg border border-gray-300">
    <div class="border-b border-gray-300 px-2.5 py-5 text-lg font-semibold">
      {{ title }}
    </div>
    <div class="flex flex-col p-2.5">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>
