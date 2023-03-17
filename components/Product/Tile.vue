<template>
  <nuxt-link
    class="hover:shadow-2 group block transition-all duration-200 hover:bg-white"
    :to="`/fleet/${zeppelin.id}`"
  >
    <img
      class="h-[260px] w-[260px] rounded object-cover"
      :src="zeppelin.image || ''"
      :alt="zeppelin.name || ''"
      :loading="lazyImage ? 'lazy' : 'eager'"
    />
    <div class="relative px-2.5 pt-5 pb-9 font-medium text-black">
      <div class="pb-2.5 text-lg leading-6">
        {{ zeppelin.name }}
      </div>
      <div class="text-sm leading-4">
        From <strong>${{ zeppelin.price }}</strong>
      </div>

      <div
        class="absolute top-[22px] right-4 flex h-11 w-11 items-center justify-center rounded-full bg-blue-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        <Arrow class="arrow-white h-6 w-6 rotate-180" />
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import Arrow from '@/assets/icons/arrow_thin_left.svg?skipsvgo';
import { FullProduct } from '~/types/products';

defineProps<{
  zeppelin: FullProduct;
  lazyImage?: boolean;
}>();
</script>

<style scoped>
.arrow-white :deep(path) {
  @apply fill-white;
}
</style>
