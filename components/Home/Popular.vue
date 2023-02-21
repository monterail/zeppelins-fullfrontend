<template>
  <div class="mb-20">
    <div class="flex justify-between items-center mb-11 mt-20">
      <h2>Most popular</h2>
      <a href="/fleet">See more -></a>
    </div>
    <div class="flex gap-10">
      <ProductTile
        v-for="zep in mostPopular"
        :key="zep.product_id"
        :zeppelin="zep"
        class="w-1/4"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getProductList } from '~/service/products';

const mostPopular = ref();
onMounted(async () => {
  mostPopular.value = await getProductList(4);
});
</script>
