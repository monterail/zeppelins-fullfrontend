<template>
  <BaseCard title="Change Email">
    <form
      class="max-w-[500px]"
      @submit.prevent
    >
      <BaseInput
        id="newEmail"
        v-model="formData.email"
        type="email"
        label="New email address"
        placeholder="Enter your new email address"
      />
      <BaseButton
        v-loading="isUpdateLoading"
        class="mt-3 w-40"
        @click.prevent="saveInformation"
      >
        Save
      </BaseButton>
    </form>
  </BaseCard>
</template>

<script setup lang="ts">
const { isLoading: isUpdateLoading, mutate: updateUser } = useUserUpdate();

const formData = ref({
  email: '',
});

const saveInformation = () => {
  updateUser(formData.value);
};
</script>
