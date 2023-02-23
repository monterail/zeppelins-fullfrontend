<template>
  <section>
    <div class="flex justify-between items-center mb-11">
      <h3>{{ title }}</h3>

      <NuxtLink
        class="flex items-center whitespace-nowrap text-sm"
        to="/fleet"
      >
        See more
        <ArrowIcon class="rotate-180 arrow-black ml-4 w-6 h-6" />
      </NuxtLink>
    </div>

    <ul class="flex gap-10">
      <li
        v-for="zeppelin in zeppelins"
        :key="zeppelin.product_id"
      >
        <ProductTile :zeppelin="zeppelin" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { FullProduct } from '~/types/products';
import ArrowIcon from '@/assets/icons/arrow_thin_left.svg?skipsvgo';
import { FullProduct } from '~/types/products';

defineProps<{
  title: string;
  zeppelins: FullProduct[];
}>();
</script>

<style scoped>
.arrow-black :deep(path) {
  @apply fill-black;
}
</style>
