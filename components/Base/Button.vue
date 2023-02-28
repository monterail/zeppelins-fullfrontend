<script setup lang="ts">
import { computed } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import ArrowLeft from '~/assets/icons/arrow-left.svg?skipsvgo';
import ArrowRight from '~/assets/icons/arrow-right.svg?skipsvgo';

const props = withDefaults(
  defineProps<{
    variant?:
      | 'fill'
      | 'outline'
      | 'text'
      | 'featured-link'
      | 'icon-square'
      | 'icon-round';
    size?: 'medium' | 'big' | 'round' | 'square';
    to?: RouteLocationRaw | null;
    href?: string | null;
    arrow?: null | 'right' | 'left';
  }>(),
  {
    variant: 'fill',
    size: 'medium',
    to: null,
    href: null,
    arrow: null,
  },
);

const buttonLookVariants = ['fill', 'outline', 'icon-square', 'icon-round'];

const componentType = computed(() => {
  if (props.href) return 'a';
  if (props.to) return 'NuxtLink';
  return 'button';
});

const styleClasses = computed(() => {
  return [
    buttonLookVariants.includes(props.variant)
      ? `button button--${props.size} button--${props.variant}`
      : `text ${props.variant}`,
    ,
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
  @apply inline-block p-0 w-[50px] h-[50px] border border-solid rounded;
}

.text {
  @apply text-sm hover:underline transition duration-150;
}

.featured-link {
  @apply inline-flex items-center gap-x-3 whitespace-nowrap font-medium;
}

.button--big {
  @apply py-5 px-10;
}
</style>
