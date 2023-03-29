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
  email: '',
});

const saveInformation = () => {
  console.warn(formData.value);
};
</script>
