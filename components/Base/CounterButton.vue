<template>
  <button
    class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200"
    @click="handleClick"
  >
    <PlusIcon v-if="isPlusButton" />
    <MinusIcon v-else />
  </button>
</template>

<script setup lang="ts">
import PlusIcon from '~/assets/icons/plus.svg?skipsvgo';
import MinusIcon from '~/assets/icons/minus.svg?skipsvgo';

const props = defineProps<{
  counter: number;
  type: 'plus' | 'minus';
}>();

const emit = defineEmits(['update:counter']);

const isPlusButton = computed(() => props.type === 'plus');

const handleClick = () => {
  isPlusButton.value ? incrementCounter() : decrementCounter();
};

const incrementCounter = () => emit('update:counter', props.counter + 1);
const decrementCounter = () =>
  emit('update:counter', props.counter > 1 ? props.counter - 1 : props.counter);
</script>
