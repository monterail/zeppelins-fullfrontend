<template>
  <div class="my-20">
    <h1 class="mb-20">Check out our fleet</h1>

    <ul class="grid grid-cols-4 gap-10 mb-10">
      <li
        v-for="zeppelin in zeppelins"
        :key="zeppelin.product_id"
      >
        <ProductTile :zeppelin="zeppelin" />
      </li>
    </ul>

    <!-- TODO: Add Button component -->
    <button
      class="block w-min-content-w mx-auto"
      @click="loadMore"
    >
      See more
    </button>
  </div>
</template>

<script setup lang="ts">
function loadMore() {
  alert('LOAD MORE');
}

const { data: zeppelins } = useProductList();
</script>
