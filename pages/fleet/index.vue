<template>
  <div class="my-20">
    <h1 class="mb-20">Check out our fleet</h1>

    <ul class="grid grid-cols-4 gap-10 mb-10">
      <li
        v-for="zeppelin in zeppelins"
        :key="zeppelin.id"
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

const zeppelins: ZeppelinTile[] = [
  {
    id: 1,
    image: {
      alt: 'Name',
      path: 'https://picsum.photos/300',
    },
    lowestPrice: 213,
    name: 'Name',
  },
  {
    id: 2,
    image: {
      alt: 'Led Zeppelin',
      path: 'https://picsum.photos/260',
    },
    lowestPrice: 721,
    name: 'Led Zeppelin',
  },
  {
    id: 3,
    image: {
      alt: 'Ten niemiecki',
      path: 'https://picsum.photos/320',
    },
    lowestPrice: 372,
    name: 'Ten niemiecki',
  },
  {
    id: 4,
    image: {
      alt: 'Jeszcze jeden',
      path: 'https://picsum.photos/360',
    },
    lowestPrice: 137,
    name: 'Jeszce jeden',
  },
  {
    id: 5,
    image: {
      alt: 'Name',
      path: 'https://picsum.photos/310',
    },
    lowestPrice: 213,
    name: 'Name',
  },
  {
    id: 6,
    image: {
      alt: 'Led Zeppelin',
      path: 'https://picsum.photos/250',
    },
    lowestPrice: 721,
    name: 'Led Zeppelin',
  },
  {
    id: 7,
    image: {
      alt: 'Ten niemiecki',
      path: 'https://picsum.photos/330',
    },
    lowestPrice: 372,
    name: 'Ten niemiecki',
  },
  {
    id: 8,
    image: {
      alt: 'Jeszcze jeden',
      path: 'https://picsum.photos/400',
    },
    lowestPrice: 137,
    name: 'Jeszce jeden',
  },
];
</script>
