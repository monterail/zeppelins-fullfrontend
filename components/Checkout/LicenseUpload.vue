<template>
  <div>
    <p class="mb-7 text-2xl">License</p>
    <BaseFileUpload
      accept=".pdf,.doc,.docx,.odt,.jpg,.jpeg,.png,.bmp"
      @update:file="$emit('update:license', $event)"
    >
      <p
        v-if="hasLicense"
        class="font-bold"
      >
        Your current license:
      </p>
      <p v-else>Drag & drop your license here.</p>
      {{ hasLicense || 'Drag & drop your license scan here' }}
    </BaseFileUpload>
  </div>
</template>

<script setup lang="ts">
defineEmits(['update:license']);

const { data: userProfile } = useUserProfile();

const hasLicense = computed(() => {
  const currentLicense = userProfile.value?.current_license?.split('/')[1];
  return currentLicense || null;
});
</script>
