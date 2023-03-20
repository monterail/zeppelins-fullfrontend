<template>
  <BaseCard :title="title">
    <div v-if="orders.length">
      <div
        v-for="(order, index) in orders"
        :key="order.id"
        class="min-h-[100px] border-gray-300 pt-2.5 first:pt-0 last:pb-0"
        :class="{
          'border-b pb-2.5': index !== orders.length - 1,
        }"
      >
        <ProfileOrdersOrder :order="order" />
      </div>
    </div>
  </BaseCard>
</template>

<script lang="ts" setup>
import { ProfileOrder } from '~/types/order';

defineProps<{
  title: string;
  orders?: ProfileOrder[];
}>();
</script>
