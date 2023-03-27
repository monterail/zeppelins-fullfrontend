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
  <BaseModal
    :is-shown="isShown"
    @close="userCloseModal"
  >
    <template #title> Good job! </template>
    <template #content>
      <span>
        An email will be sent to
        <strong v-if="formData.email">
          {{ formData.email }}
        </strong>
        <template v-else>the new address</template>
        with a confirmation link. Click it to confirm your email change!
      </span>
      <div class="mt-5 flex justify-center">
        <BaseButton
          class="w-40"
          @click="userCloseModal"
        >
          Okay, got it!
        </BaseButton>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
const { isLoading: isUpdateLoading, mutate: updateUser } = useUserUpdate();
const { isShown, show: showModal, hide: hideModal } = useModal();

const formData = ref({
  email: '',
});

const userCloseModal = () => {
  if (!isUpdateLoading.value) {
    hideModal();
    formData.value.email = '';
  }
};

const saveInformation = () => {
  updateUser(formData.value, { onSuccess: showModal });
};
</script>
