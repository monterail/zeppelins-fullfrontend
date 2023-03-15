<template>
  <div v-if="zeppelin">
    <div class="mb-10 mt-7 text-xs">
      Category / <span class="font-semibold">{{ zeppelin.name }}</span>
    </div>
    <div class="mb-44 grid grid-cols-2 gap-x-16 gap-y-5">
      <img
        :src="zeppelin.image || '~/assets/images/deafult_airship.JPG'"
        :alt="zeppelin.name || 'Default zeppelin image'"
        class="w-full rounded"
      />
      <div class="w-full">
        <h1 class="mb-2">{{ zeppelin.name }}</h1>
        <h2 class="mb-2 font-normal">
          From <span class="font-bold">${{ zeppelin.price }}</span> per day
        </h2>
        <hr class="mb-5 border border-gray-300" />
        <!-- TODO: awaiting MODEL fix -->
        <!-- <p class="mb-5">
          {{ zeppelin.description }}
        </p> -->
        <button class="mb-14 rounded-md bg-blue-200 px-5 py-2 text-white">
          Book
        </button>
        <ul>
          <BaseCollapsableItem
            v-for="item in listData"
            :key="item.id"
            :info="item"
            as="li"
          />
        </ul>
      </div>
      <ul class="flex">
        <li
          v-for="perk in perks"
          :key="perk.id"
          class="flex w-1/3 items-center gap-2"
        >
          <component :is="perk.icon"></component>
          <p class="my-auto text-xs">{{ perk.description }}</p>
        </li>
      </ul>
    </div>
    <ProductsList
      v-if="zeppelins"
      :is-loading="isLoadingPopular"
      title="Others from our fleet"
      :zeppelins="zeppelins"
      class="mb-40"
    />
  </div>
  <div v-else-if="!isLoading">No zeppelin found...</div>
  <div
    v-else
    :v-loading="isLoading"
  >
    We are loading
  </div>
</template>

<script setup lang="ts">
import ProductIcon1 from '~/assets/icons/product_icon_1.svg?skipsvgo';
import ProductIcon2 from '~/assets/icons/product_icon_2.svg?skipsvgo';
import ProductIcon3 from '~/assets/icons/product_icon_3.svg?skipsvgo';

const id = useRoute().params.id || '';
const { data: zeppelin, isLoading } = useProductById(id);
const { data: zeppelins, isLoading: isLoadingPopular } = useProductList(4);

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
      'Honestly it is total luxury onboard, they even have a cart with drinks!',
  },
  {
    id: 2,
    title: 'Technical Details',
    description: 'Test foo bar.\nLong descriptive text.',
  },
];
</script>
