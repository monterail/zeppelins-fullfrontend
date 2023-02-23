<template>
  <div v-if="zeppelin">
    <div class="mb-10 mt-7 text-xs">
      Category / <span class="font-semibold">{{ zeppelin.name }}</span>
    </div>
    <div class="grid grid-cols-2 gap-x-16 gap-y-5 mb-44">
      <img
        :src="zeppelin.image || ''"
        :alt="zeppelin.name || ''"
        class="w-full rounded"
      />
      <div class="w-full">
        <h1 class="mb-2">{{ zeppelin.name }}</h1>
        <h2 class="mb-2 font-normal">
          From <span class="font-bold">${{ zeppelin.price }}</span> per day
        </h2>
        <hr class="border-gray-300 border mb-5" />
        <!-- TODO: awaiting MODEL fix -->
        <!-- <p class="mb-5">
          {{ zeppelin.description }}
        </p> -->
        <button class="bg-blue-200 text-white px-5 py-2 rounded-md mb-14">
          Book
        </button>
        <BaseCollapsableItem
          v-for="item in listData"
          :key="item.id"
          :info="item"
          as="ul"
        />
      </div>
      <ul class="flex">
        <li
          v-for="perk in perks"
          :key="perk.id"
          class="w-1/3 flex items-center gap-2"
        >
          <component :is="perk.icon"></component>
          <p class="text-xs my-auto">{{ perk.description }}</p>
        </li>
      </ul>
    </div>
    <ProductsList
      v-if="zeppelins"
      title="Others from our fleet"
      :zeppelins="zeppelins"
      class="mb-40"
    />
  </div>
</template>

<script setup lang="ts">
import ProductIcon1 from '~/assets/icons/product_icon_1.svg?skipsvgo';
import ProductIcon2 from '~/assets/icons/product_icon_2.svg?skipsvgo';
import ProductIcon3 from '~/assets/icons/product_icon_3.svg?skipsvgo';

const id = useRoute().params.id || '';
const { data: zeppelin } = useProductById(id);
const { data: zeppelins } = useProductList(4);

const perks = [
  { id: 1, icon: ProductIcon1, description: 'Benefits description' },
  { id: 2, icon: ProductIcon2, description: 'Benefits description' },
  { id: 3, icon: ProductIcon3, description: 'Benefits description' },
];

const listData = [
  {
    id: 1,
    title: 'Amenities',
    description:
      'Honestly it is total luxary onboard, they even have a cart with drinks!',
  },
  {
    id: 2,
    title: 'Technical Details',
    description: 'Test foo bar.\nLong descriptive text.',
  },
];
</script>
