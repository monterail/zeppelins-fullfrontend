<template>
  <BaseCard title="Change password">
    <form
      class="max-w-[500px]"
      @submit.prevent
    >
      <BaseInput
        id="password"
        v-model="formData.password"
        type="password"
        label="Password"
        placeholder="Enter your current password"
      />
      <BaseInput
        id="newPassword"
        v-model="formData.newPassword"
        type="password"
        label="New password"
        placeholder="Enter your new password"
      />
      <BaseButton
        class="mt-3 w-40"
        @click.prevent="saveInformation"
      >
        Save
      </BaseButton>
    </form>
  </BaseCard>
</template>

<script setup lang="ts">
const formData = ref({
  password: '',
  newPassword: '',
});

const saveInformation = () => {
  console.warn(formData.value);
};
</script>
