<template>
  <div class="w-full relative">
    <img
      class="block w-full h-full object-cover object-center"
      :src="backgroundImage.path"
      :alt="backgroundImage.alt"
    />
    <div
      class="absolute inset-0 w-full h-full py-10 px-20"
      :class="{ 'bg-white bg-opacity-50': !!transparentBackground }"
    >
      <div
        class="w-full h-full flex flex-col justify-between items-start font-500"
      >
        <h2>{{ header }}</h2>
        <p class="text-sm">{{ subheader }}</p>
        <nuxt-link
          :to="cta.href"
          class="mt-5 flex"
          :class="{
            'bg-blue-200 text-white px-5 py-2 rounded-md': cta.isButton,
          }"
        >
          <span>
            {{ cta.title }}
          </span>
          <ArrowIcon
            class="ml-2 rotate-180 w-6"
            :class="cta.isButton ? 'fill-white' : 'fill-black'"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArrowIcon from '@/assets/icons/arrow_thin_left.svg?skipsvgo';

defineProps<{
  backgroundImage: {
    path: string;
    alt: string;
  };
  header: string;
  subheader?: string;
  cta: {
    title: string;
    href: string;
    isButton?: boolean;
  };
  transparentBackground?: boolean;
}>();
</script>
