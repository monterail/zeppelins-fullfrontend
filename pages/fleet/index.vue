<template>
  <div class="my-20">
    <h1 class="mb-20">Check out our fleet</h1>

    <ul
      v-loading="isLoading"
      class="mb-10 grid grid-cols-4 gap-10"
    >
      <li
        v-for="zeppelin in zeppelins"
        :key="zeppelin.id"
      >
        <ProductTile :zeppelin="zeppelin" />
      </li>
    </ul>

    <div class="flex w-full justify-center">
      <ClientOnly>
        <BaseButton
          v-if="(canLoadMore || isLoadingMore) && !isLoading"
          v-loading="isLoadingMore"
          class="w-[223px]"
          @click="loadMore"
        >
          See more
        </BaseButton>
        <template #fallback>
          <BaseButton class="w-[223px]"> See more </BaseButton>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
const displayedProductsCount = ref(8);

const loadMore = () => {
  displayedProductsCount.value += 4;
};

const canLoadMore = computed(() => {
  if (maxAmount.value) {
    return maxAmount.value > displayedProductsCount.value;
  } else {
    return true;
  }
});

const {
  data: zeppelins,
  isLoading,
  isPreviousData: isLoadingMore,
  maxAmount,
} = useProductList(displayedProductsCount);
</script>
