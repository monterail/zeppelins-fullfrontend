<template>
  <section>
    <div class="mb-11 flex items-center justify-between">
      <h3>{{ title }}</h3>
      <BaseButton
        variant="text"
        arrow="right"
        to="/fleet"
      >
        See more
      </BaseButton>
    </div>

    <ul
      v-loading="isLoading"
      class="flex gap-10"
    >
      <li
        v-for="zeppelin in zeppelins"
        :key="zeppelin.id"
      >
        <ProductTile :zeppelin="zeppelin" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { FullProduct } from '~/types/products';

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
