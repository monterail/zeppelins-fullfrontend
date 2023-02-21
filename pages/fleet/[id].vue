<template>
  <div>
    <div class="mb-10 mt-7">Category / Product Name</div>
    <div class="grid grid-cols-2 gap-16">
      <img
        :src="zeppelin.image.path"
        :alt="zeppelin.image.name"
        class="w-full rounded"
      />
      <div class="w-full">
        <h1 class="mb-2">{{ zeppelin.name }}</h1>
        <h2 class="mb-2">From ${{ zeppelin.lowestPrice }} per day</h2>
        <hr class="border-gray-300 border mb-5" />
        <p class="mb-5">
          Description of this fantastic flying boi. It’s a great one!
        </p>
        <button class="bg-blue-200 text-white px-5 py-2 rounded-md">
          Book
        </button>
        <BaseList
          v-for="item in listData"
          :key="item.title"
          :title="item.title"
          :long-text="item.longText"
          class="mt-12"
        />
      </div>
      <div>social stuff</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const zeppelin: ZeppelinTile = {
  id: 1,
  image: {
    alt: 'Name',
    path: 'https://picsum.photos/300',
  },
  lowestPrice: 213,
  name: 'Name',
};

const listData = [
  { title: 'Title', longText: 'Blah blah blah blah' },
  { title: 'Title', longText: 'Blah blah blah blah' },
  { title: 'Title', longText: 'Blah blah blah blah' },
  { title: 'Title', longText: 'Blah blah blah blah' },
];
</script>
