<template>
  <section>
    <div class="flex justify-between items-center mb-11">
      <h3>{{ title }}</h3>

      <!-- <NuxtLink
        class="flex items-center whitespace-nowrap text-sm"
        to="/fleet"
      >
        See more
        <ArrowIcon class="rotate-180 arrow-black ml-4 w-6 h-6" />
      </NuxtLink> -->
      <BaseButton
        variant="text"
        arrow="right"
        to="/fleet"
        >See more
      </BaseButton>
    </div>

    <ul
      v-loading="isLoading"
      class="flex gap-10"
    >
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
// import ArrowIcon from '@/assets/icons/arrow_thin_left.svg?skipsvgo';

defineProps<{
  title: string;
  zeppelins?: FullProduct[];
  isLoading: boolean;
}>();
</script>

<style scoped>
.arrow-black :deep(path) {
  @apply fill-black;
}
</style>
