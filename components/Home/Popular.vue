<template>
  <div class="mb-20">
    <div class="flex justify-between items-center mb-11 mt-20">
      <h2>Most popular</h2>
      <a href="/fleet">See more -></a>
    </div>
    <div class="flex gap-10">
      <div v-if="isLoading">loading...</div>
      <div v-else-if="isError">error...</div>
      <ProductTile
        v-else-if="mostPopular"
        v-for="zep in mostPopular"
        :key="zep.product_id"
        :zeppelin="zep"
        class="w-1/4"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: mostPopular, isLoading, isError } = useProductList(4)
</script>
