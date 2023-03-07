<template>
  <div class="w-full border border-gray-100 rounded p-5 flex flex-col gap-10">
    <h4>Order summary</h4>
    <div class="flex">
      <img
        class="w-[100px] h-[100px] mr-5 rounded"
        :src="product.image"
        :alt="product.name"
      />
      <div>
        <p>{{ product.name || 'Name' }}</p>
        <p class="font-semibold">$ {{ product.price }}</p>
      </div>
    </div>
    <ul>
      <li>
        <!-- <p v-if="props.order.insurance.title"> -->
        <!--   {{ props.order.insurance.title }} -->
        <!-- </p> -->
        <!-- <p v-else>Not selected...</p> -->
        <!-- <p>{{ order.insurance.detail }}</p> -->
      </li>
      <li>
        <!-- <p>{{ order.days }} days</p> -->
        <!-- <p>{{ days * +selectedProduct.price }}</p> -->
      </li>
      <li>
        <!-- <p>Total</p> -->
        <!-- <p>{{ total }}</p> -->
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Order } from '~/types/order';

const props = defineProps<{
  order: Order;
}>();

const { data: product } = useProductById('1');

const total = computed(() => {
  return props.order.insurance && props.order.days
    ? props.order.days * +product.value.price + props.order.insurance.detail ||
        ''
    : '';
});
</script>
