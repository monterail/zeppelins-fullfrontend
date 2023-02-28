<script setup lang="ts">
import { computed } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import ArrowLeft from '~/assets/icons/arrow-left.svg?skipsvgo';
import ArrowRight from '~/assets/icons/arrow-right.svg?skipsvgo';

const props = withDefaults(
  defineProps<{
    cta?: boolean;
    variant?: 'fill' | 'outline' | 'featured-link';
    type?: 'regular' | 'round' | 'square';
    to?: RouteLocationRaw | null;
    href?: string | null;
    arrow?: null | 'right' | 'left';
  }>(),
  {
    cta: true,
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

const styleClasses = computed(() => {
  return props.cta
    ? [
        'transition duration-150',
        props.type === 'regular'
          ? 'inline-flex items-center gap-x-3 py-3.5 px-7 rounded border-1 border-solid text-sm font-medium hover:bg-gray-200'
          : null,
        props.type === 'round'
          ? 'inline-block border-1 border-solid w-[50px] h-[50px] rounded-full'
          : null,
        props.type === 'square'
          ? 'inline-block w-[50px] h-[50px] border-1 border-solid rounded'
          : null,
        props.variant === 'fill'
          ? 'bg-blue-200 text-white border border-solid border-blue-200 hover:bg-blue-300'
          : null,
        props.variant === 'outline'
          ? 'border border-solid border-blue-200'
          : null,
      ]
    : [
        'text-sm hover:underline transition duration-150',
        props.variant === 'featured-link'
          ? 'inline-flex items-center gap-x-3 whitespace-nowrap font-medium border-b-1 border-transparent hover:border-black :hover:no-underline'
          : null,
      ];
});

const arrowStyles = computed(() => {
  return [
    'w-[20px] h-[9px]',
    props.variant === 'outline' || props.variant === 'featured-link'
      ? 'fill-black'
      : 'fill-white',
  ];
});
</script>

<template>
  <component
    :is="componentType"
    :class="styleClasses"
    :href="props.href"
    :to="props.to"
  >
    <ArrowLeft
      v-if="props.arrow === 'left'"
      :class="arrowStyles"
    />
    <slot />
    <ArrowRight
      v-if="props.arrow === 'right'"
      :class="arrowStyles"
    />
  </component>
</template>
