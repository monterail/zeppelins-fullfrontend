<template>
  <div class="my-20">
    <h1>Welcome back {{ userProfile?.profile_name }}!</h1>
    <div class="mt-10 grid grid-cols-[1fr_3fr] gap-36">
      <ProfileSidebar />
      <ProfileContentDetails />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});

const { data: userProfile } = useUserProfile();
</script>
