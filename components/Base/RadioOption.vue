<template>
  <div
    class="relative grid w-full max-w-lg cursor-pointer grid-cols-[60px_auto] rounded border border-blue-200"
  >
    <div class="flex items-center justify-center">
      <span
        v-if="checked"
        class="relative block h-5 w-5 rounded-full bg-blue-200 after:absolute after:top-[50%] after:left-[50%] after:h-2 after:w-2 after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-full after:bg-white"
      />
      <span
        v-else
        class="block h-5 w-5 rounded-full border border-blue-200"
      />
    </div>
    <div class="flex flex-col px-5 py-3">
      <p class="text-sm font-bold">{{ option.title }}</p>
      <p class="text-xs">{{ option.description }}</p>
    </div>
    <span
      v-if="option.detail"
      class="absolute top-3 right-5 text-xs font-bold"
    >
      ${{ option.detail }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { RadioOption } from '~/types/radio-options';

defineProps<{
  checked: boolean;
  option: RadioOption;
}>();
</script>
