<template>
  <BaseCard :title="title">
    <div v-if="orders.length">
      <div
        v-for="order in orders"
        :key="order.id"
        class="min-h-[100px] border-b border-gray-300 py-2.5 first:pt-0 last:border-0 last:pb-0"
      >
        <ProfileOrdersOrder :order="order" />
      </div>
    </div>
  </BaseCard>
</template>

<script lang="ts" setup>
import { ProfileOrder } from '~/types/order';

withDefaults(
  defineProps<{
    title: string;
    orders?: ProfileOrder[];
  }>(),
  {
    orders: () => [],
  },
);
</script>
