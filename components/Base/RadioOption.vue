<template>
  <div
    class="relative grid grid-cols-[60px_auto] w-full max-w-lg border border-blue-200 rounded cursor-pointer"
  >
    <div class="flex justify-center items-center">
      <span
        v-if="checked"
        class="relative block w-5 h-5 bg-blue-200 rounded-full after:absolute after:w-2 after:h-2 after:bg-white after:rounded-full after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%]"
      />
      <span
        v-else
        class="block w-5 h-5 border border-blue-200 rounded-full"
      />
    </div>
    <div class="flex flex-col px-5 py-3">
      <p class="text-sm font-bold">{{ option.title }}</p>
      <p class="text-xs">{{ option.description }}</p>
    </div>
    <span
      v-if="option.detail"
      class="absolute top-3 right-5 text-xs font-bold"
      >${{ option.detail }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { RadioOption } from '~/types/radio-options';

defineProps<{
  checked: boolean;
  option: RadioOption;
}>();
</script>
