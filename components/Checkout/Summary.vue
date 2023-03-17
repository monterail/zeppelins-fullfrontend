<template>
  <div class="max-h-[405px] w-full rounded-[5px] border border-gray-200 p-5">
    <h4>Order summary</h4>
    <div
      v-if="product"
      class="mt-10 flex"
    >
      <img
        v-if="product.image && product.name"
        class="mr-5 h-[100px] w-[100px] rounded-[4px]"
        :src="product.image"
        :alt="product.name"
      />
      <div>
        <p class="text">{{ product.name || 'Name' }}</p>
        <p class="font-semibold">${{ product.price }}</p>
      </div>
    </div>
    <ul class="mt-10">
      <li
        v-if="order.insurance"
        class="flex w-full justify-between border-t border-t-gray-200 py-4"
      >
        <p v-if="order?.insurance?.title">
          {{ order.insurance.title }}
        </p>
        <p class="font-bold">${{ order.insurance.detail }}</p>
      </li>
      <li
        v-else
        class="flex w-full justify-between border-t border-t-gray-200 py-4"
      >
        <p>No insurance</p>
        <p class="font-bold">$0</p>
      </li>
      <li class="flex w-full justify-between border-t border-gray-300 py-4">
        <p>{{ order.days }} days</p>
        <p class="font-bold">${{ reservationCost }}</p>
      </li>
      <li class="flex w-full justify-between border-t border-t-gray-200 py-4">
        <p>Total</p>
        <p class="font-bold">${{ total }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Order } from '~/types/order';

const props = defineProps<{
  order: Order;
}>();

const { data: product } = useProductById(
  'cad189fe-7137-49da-984d-8eb8ac76deea',
);

const reservationCost = computed(() => {
  return props.order.days && product.value && product.value.price
    ? props.order.days * +product.value.price
    : 0;
});

const total = computed(() => {
  return props.order.insurance?.detail
    ? reservationCost.value + parseInt(props.order.insurance.detail)
    : reservationCost.value;
});
</script>
