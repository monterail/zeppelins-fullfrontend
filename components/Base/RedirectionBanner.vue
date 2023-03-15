<template>
  <div class="relative w-full">
    <img
      class="block h-full w-full object-cover object-center"
      :src="backgroundImage.path"
      :alt="backgroundImage.alt"
    />
    <div
      class="absolute inset-0 h-full w-full py-10 px-20"
      :class="{ 'bg-opacity-/50 bg-white': !!transparentBackground }"
    >
      <div
        class="font-500 flex h-full w-full flex-col items-start justify-between"
      >
        <h2>{{ header }}</h2>
        <p class="text-sm">{{ subheader }}</p>
        <BaseButton
          :arrow="cta.arrow"
          :variant="cta.variant"
          :href="cta.href"
          :to="cta.to"
          class="mt-5"
        >
          <span class="font-medium">
            {{ cta.title }}
          </span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  backgroundImage: {
    path: string;
    alt: string;
  };
  header: string;
  subheader?: string;
  cta: {
    title: string;
    href?: string;
    to?: string;
    arrow?: 'left' | 'right' | null;
    variant?: 'fill' | 'outline' | 'text';
  };
  transparentBackground?: boolean;
}>();
</script>
