<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';
import ArrowLeft from '~/assets/icons/arrow-left.svg?skipsvgo';
import ArrowRight from '~/assets/icons/arrow-right.svg?skipsvgo';

const props = withDefaults(
  defineProps<{
    variant?: 'fill' | 'outline' | 'text';
    size?: 'medium' | 'big';
    shape?: 'regular' | 'round' | 'square';
    to?: RouteLocationRaw | null;
    href?: string | null;
    arrow?: null | 'right' | 'left';
  }>(),
  {
    variant: 'fill',
    size: 'medium',
    shape: 'regular',
    to: null,
    href: null,
    arrow: null,
  },
);

defineEmits(['click']);

const buttonLookVariants = ['fill', 'outline'];

const componentType = computed(() => {
  if (props.href) return 'a';
  if (props.to) return 'NuxtLink';
  return 'button';
});

const styleClasses = computed(() => {
  return buttonLookVariants.includes(props.variant)
    ? `button button--${props.size} button--${props.variant} button--${props.shape}`
    : 'button--text';
});

const iconFill = computed(() => {
  return [
    'arrow-icon',
    props.variant === 'outline' || props.variant === 'text'
      ? 'arrow-black'
      : 'arrow-white',
  ];
});
</script>

<template>
  <component
    :is="componentType"
    :class="styleClasses"
    :href="props.href"
    :to="props.to"
    @click="$emit('click', $event)"
  >
    <ArrowLeft
      v-if="props.arrow === 'left'"
      :class="iconFill"
    />
    <slot />
    <ArrowRight
      v-if="props.arrow === 'right'"
      :class="iconFill"
    />
  </component>
</template>

<style scoped>
.button {
  @apply py-3.5 px-7  inline-flex items-center gap-x-3  rounded border border-solid text-sm font-medium hover:bg-gray-200 transition duration-150;
}

.button--fill {
  @apply bg-blue-200 text-white border-blue-200 hover:bg-blue-300;
}
.button--outline {
  @apply border-blue-200;
}

.button--round {
  @apply inline-block p-0 w-[50px] h-[50px] border border-solid rounded-full;
}

.button--square {
  @apply inline-block p-0 w-[50px] h-[50px] border border-solid border-gray-300 rounded;
}

.button--text {
  @apply inline-flex items-center gap-x-3 text-sm hover:underline transition duration-150;
}

.button--big {
  @apply py-5 px-10;
}

.arrow-icon {
  @apply w-[20px] h-[9px];
}

.arrow-black :deep(path) {
  @apply fill-black;
}
.arrow-white :deep(path) {
  @apply fill-white;
}
</style>
