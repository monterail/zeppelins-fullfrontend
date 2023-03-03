<template>
  <RadioGroup
    v-if="options"
    :modelValue="option"
    @update:modelValue="(value) => emit('update:option', value)"
    class="flex flex-col gap-y-2"
  >
    <RadioGroupLabel><slot /></RadioGroupLabel>
    <RadioGroupOption
      v-for="option in options"
      :key="option.id"
      v-slot="{ checked }"
      :value="option"
    >
      <div
        class="grid grid-cols-2 w-full max-w-lg px-5 py-3 border border-blue-300 rounded"
      >
        <div
          class="before:content-[' '] before:w-5 before:h-5 before:bg-blue-300 before:rounded"
        ></div>
        <div class="flex flex-col">
          <p :class="checked ? 'bg-blue-200' : ''">{{ option.title }}</p>
          <p>{{ option.description }}</p>
        </div>
      </div>
    </RadioGroupOption>
  </RadioGroup>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';

interface OptionType {
  id: number;
  title: string;
  description: string;
}

defineProps<{
  option: OptionType;
  options: OptionType[];
}>();

const emit = defineEmits(['update:option']);
</script>
