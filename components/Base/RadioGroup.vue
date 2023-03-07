<template>
  <RadioGroup
    v-if="options"
    :model-value="option"
    @update:model-value="(value) => emit('update:option', value)"
  >
    <RadioGroupLabel>
      <slot />
    </RadioGroupLabel>
    <div class="flex flex-col gap-y-5">
      <RadioGroupOption
        v-for="opt in options"
        :key="opt.id"
        v-slot="{ checked }"
        :value="opt"
      >
        <BaseRadioOption
          :option="opt"
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
