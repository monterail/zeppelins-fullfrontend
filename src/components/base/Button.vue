<script setup lang="ts">
import { computed } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import ArrowLeft from '~/src/assets/icons/arrow-left.svg?skipsvgo';
import ArrowRight from '~/src/assets/icons/arrow-right.svg?skipsvgo';

const props = withDefaults(
  defineProps<{
    variant?: 'fill' | 'outline';
    type?: 'regular' | 'icon-round' | 'icon-sqaure';
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
.button {
  padding: 14px 28px;
  border-radius: 4px;
  border: 1px solid transparent;
  font: 14px Inter, sans-serif;
  font-weight: 500;
}

.button--fill {
  background: #595cff;
  border: 1px solid #595cff;
  color: white;
}

.button--outline {
  background: transparent;
  border-color: #595cff;
}

.fill-black ::v-deep path {
  fill: black;
}

.fill-white ::v-deep path {
  fill: white;
}
.arrow-icon {
  width: 20px;
  height: 9px;
}
</style>
