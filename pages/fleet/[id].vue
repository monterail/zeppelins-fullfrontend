<template>
  <div>
    <div v-loading="isLoading">
      <div class="mb-10 mt-7 text-xs">
        Category / <span class="font-semibold">{{ zeppelin?.name }}</span>
      </div>
      <div class="grid min-h-[620px] grid-cols-2 gap-x-16 gap-y-5">
        <div>
          <img
            :src="zeppelin?.image || '~/assets/images/default_zeppelin.jpg'"
            :alt="zeppelin?.name || 'Zeppelin image'"
            class="mb-5 w-full rounded"
          />
          <ul class="flex">
            <li
              v-for="perk in perks"
              :key="perk.id"
              class="flex w-1/3 items-center gap-2"
            >
              <component :is="perk.icon" />
              <p class="my-auto max-w-[100px] text-xs">
                {{ perk.description }}
              </p>
            </li>
          </ul>
        </div>
        <div class="w-full">
          <h1 class="mb-2">{{ zeppelin?.name }}</h1>
          <h2 class="mb-5 border-b border-gray-300 pb-2 font-normal">
            From <span class="font-bold">${{ zeppelin?.price }}</span> per day
          </h2>
          <p class="mb-5">
            {{ zeppelin?.description }}
          </p>
          <BaseButton
            class="mb-14 w-[309px] rounded-md bg-blue-200 px-5 py-2 text-white"
            href="/checkout"
          >
            Book
          </BaseButton>
          <ul>
            <BaseCollapsableItem
              v-for="item in listData"
              :key="item.id"
              :info="item"
              as="li"
            />
          </ul>
        </div>
      </div>
    </div>
    <ProductList
      :is-loading="isLoadingPopular"
      title="Others from our fleet"
      :zeppelins="zeppelins"
      class="mb-32"
    />
  </div>
</template>

<script setup lang="ts">
import ProductIcon1 from '~/assets/icons/product_icon_1.svg?skipsvgo';
import ProductIcon2 from '~/assets/icons/product_icon_2.svg?skipsvgo';
import ProductIcon3 from '~/assets/icons/product_icon_3.svg?skipsvgo';

const id = useRoute().params.id || '';
const { data: zeppelin, isLoading } = useProductById(id);
const { data: zeppelins, isLoading: isLoadingPopular } = useProductList(ref(4));

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
