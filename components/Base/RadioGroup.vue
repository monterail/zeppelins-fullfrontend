<template>
  <RadioGroup
    v-if="options"
    :modelValue="option"
    @update:modelValue="(value) => emit('update:option', value)"
  >
    <RadioGroupLabel><slot /></RadioGroupLabel>
    <div class="flex flex-col gap-y-5">
      <RadioGroupOption
        v-for="option in options"
        :key="option.id"
        v-slot="{ checked }"
        :value="option"
      >
        <BaseRadioOption
          :option="option"
          :checked="checked"
        />
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';
import { RadioOption } from '~/types/radio-options';

defineProps<{
  option: RadioOption;
  options: RadioOption[];
}>();

const emit = defineEmits(['update:option']);
</script>
