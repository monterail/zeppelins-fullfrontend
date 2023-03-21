<template>
  <div class="flex gap-2.5">
    <img
      :src="order.image || '~/assets/images/default_zeppelin.jpg'"
      class="object-fit h-[100px] w-[100px] shrink-0 overflow-hidden rounded"
      :alt="order.title"
    />
    <div class="flex w-full flex-col">
      <div class="flex justify-between">
        <div class="text-lg font-semibold">{{ order.title }}</div>
        <div class="text-lg font-semibold">${{ order.price }}</div>
      </div>
      <div class="mt-2.5 flex w-full">
        <div class="flex items-center gap-2.5">
          <CheckIcon v-if="order.insurance !== 'no-insurance'" />
          <div class="text-sm text-black">
            {{ insuranceType }}
          </div>
        </div>
      </div>
      <div class="mt-auto flex items-center justify-between">
        <div class="flex items-center gap-1.5 text-sm text-gray-500">
          <CalendarIcon /> {{ order.date }}
        </div>
        <div
          class="cursor-default rounded p-1 text-sm capitalize text-white"
          :class="orderStatusClass"
        >
          {{ order.status }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ProfileOrder } from '~/types/order';
import CheckIcon from '~/assets/icons/check.svg?skipsvgo';
import CalendarIcon from '~/assets/icons/calendar.svg?skipsvgo';

const props = defineProps<{
  order: ProfileOrder;
}>();

const insuranceType = computed(() => {
  switch (props.order.insurance) {
    case 'no-insurance':
      return 'No insurance';
    case 'full':
      return 'Full insurance';
    case 'basic':
      return 'Basic insurance';
    default:
      return 'No insurance';
  }
});

const orderStatusClass = computed(() => {
  if (props.order.status === 'pending') return 'bg-blue-300';
  if (props.order.status === 'active') return 'bg-green';
  if (props.order.status === 'cancelled') return 'bg-red';
  return 'bg-gray-500';
});
</script>
