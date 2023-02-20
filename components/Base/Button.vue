<script setup lang="ts">
import { computed } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import ArrowLeft from '~/assets/icons/arrow-left.svg?skipsvgo';
import ArrowRight from '~/assets/icons/arrow-right.svg?skipsvgo';

const props = withDefaults(
  defineProps<{
    variant?: 'fill' | 'outline';
    type?: 'regular' | 'round' | 'sqaure';
    to?: RouteLocationRaw | null;
    href?: string | null;
    arrow?: null | 'right' | 'left';
  }>(),
  {
    variant: 'fill',
    type: 'regular',
    to: null,
    href: null,
    arrow: null,
  },
);

const componentType = computed(() => {
  if (props.href) return 'a';
  if (props.to) return 'NuxtLink';
  return 'button';
});

const buttonClasses = computed(() => {
  if (componentType.value === 'a' || componentType.value === 'NuxtLink')
    return 'link';
  return ['button', `button--${props.variant}`, `button--${props.type}`];
});

const iconFill = computed(() => {
  return [
    'arrow-icon',
    props.variant === 'outline' ? 'fill-black' : 'fill-white',
  ];
});
</script>

<template>
  <component
    :is="componentType"
    :class="buttonClasses"
    class="py-3.5 px-7 rounded border-1 border-solid text-sm font-medium hover:bg-gray-200"
    :href="props.href"
    :to="props.to"
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
.button--fill {
  @apply bg-blue-200 text-white border border-solid border-blue-200 hover:bg-blue-300;
}

.button--outline {
  @apply border border-solid border-blue-200;
}

.button--square,
.button--round {
  @apply p-0;
  width: 46px;
  height: 46px;
}

.button--round {
  @apply rounded-full;
}

.fill-black :deep(path) {
  fill: black;
}

.fill-white :deep(path) {
  fill: white;
}
.arrow-icon {
  width: 20px;
  height: 9px;
}
</style>
