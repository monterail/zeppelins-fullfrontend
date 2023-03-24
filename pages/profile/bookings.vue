<template>
  <h1>Welcome back {{ userData?.profile_name }}!</h1>
  <div class="mt-10 grid grid-cols-[1fr_3fr] gap-36">
    <ProfileSidebar />
    <ProfileContentBookings />
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});

const { data: userData } = useUserData();
</script>
