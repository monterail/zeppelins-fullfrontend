<template>
  <nuxt-link
    class="group block hover:shadow-2 hover:bg-white transition-all duration-200"
    :to="`/fleet/${zeppelin.product_id}`"
  >
    <img
      class="rounded w-[260px] h-[260px] object-cover"
      :src="zeppelin.image || ''"
      :alt="zeppelin.name || ''"
      :loading="lazyImage ? 'lazy' : 'eager'"
    />
    <div class="relative pt-5 px-2.5 pb-9 text-black font-medium">
      <div class="pb-2.5 text-lg leading-6">
        {{ zeppelin.name }}
      </div>
      <div class="text-sm leading-4">
        From <strong>${{ zeppelin.price }}</strong>
      </div>

      <div
        class="opacity-0 duration-200 transition-opacity group-hover:opacity-100 flex absolute w-11 h-11 rounded-full bg-blue-300 justify-center items-center -top-[22px] right-4"
      >
        <Arrow class="w-6 h-6 arrow-white rotate-180" />
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
