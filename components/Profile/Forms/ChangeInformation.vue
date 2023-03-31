<template>
  <BaseCard title="Personal information">
    <form
      class="max-w-[500px]"
      @submit.prevent
    >
      <BaseInput
        id="email"
        v-model="formData.profileName"
        type="email"
        label="Name"
        placeholder="Enter your name"
      />
      <p class="mb-7 text-base">Pilot license</p>
      <BaseFileUpload
        accept=".pdf,.doc,.docx,.odt,.jpg,.jpeg,.png,.bmp"
        @update:file="handleChange"
      >
        <template v-if="licenseName">
          <p>Your current license:</p>
          <p class="font-bold">
            {{ licenseName }}
          </p>
        </template>
        <template v-else>
          Drag & drop <br />
          your license scan here
        </template>
      </BaseFileUpload>
      <BaseButton
        v-loading="isLoading || isRefetching"
        class="mt-5 w-40"
        @click.prevent="saveInformation"
      >
        Save
      </BaseButton>
    </form>
  </BaseCard>
</template>

<script setup lang="ts">
const { data: userProfile, refetch, isRefetching } = useUserProfile();
const { mutateAsync: updateProfile, isLoading } = useUserProfileUpdate();

const licenseName = ref(
  userProfile.value?.current_license?.split('/').pop() || '',
);

const formData = ref({
  profileName: userProfile.value?.profile_name || '',
  file: null as File | null,
});

const saveInformation = async () => {
  await updateProfile(formData.value);
  refetch.value();
};

const handleChange = (event: File) => {
  formData.value.file = event;
};
</script>
