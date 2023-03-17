<template>
  <div class="flex flex-col gap-y-5">
    <template v-if="noOrders">
      <div
        class="flex flex-col gap-2.5 rounded-lg border border-gray-300 p-6 text-center font-semibold"
      >
        <span>Nothing here yet!</span>
        <span>Create a booking to see it here later.</span>
      </div>
    </template>
    <template v-else>
      <ProfileOrdersCard
        title="Ongoing bookings"
        :orders="ongoing"
      />
      <ProfileOrdersCard
        title="Upcoming bookings"
        :orders="ongoing"
      />
      <ProfileOrdersCard
        title="Past bookings"
        :orders="ongoing"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ProfileOrder } from '~/types/order';
const route = useRoute();
const ongoing: ProfileOrder[] = [
  {
    id: '1',
    title: 'Pending test with no insurance',
    price: 999,
    date: '2021-01-01',
    insurance: 'no-insurance',
    status: 'pending',
    image: 'https://picsum.photos/200/100',
  },
  {
    id: '2',
    title: 'Active test with full insurance',
    price: 12345,
    date: '2022-01-05 - 2022-01-10',
    insurance: 'full',
    status: 'active',
    image: 'https://picsum.photos/200/200',
  },
  {
    id: '3',
    title: 'Cancelled test with basic insurance',
    price: 1,
    date: '2022-01-05 - 2022-01-10',
    insurance: 'basic',
    status: 'cancelled',
    image: 'https://picsum.photos/200/300',
  },
];

const noOrders = computed(() => {
  return !!route.query.noBookings || ongoing.length === 0;
});
</script>
