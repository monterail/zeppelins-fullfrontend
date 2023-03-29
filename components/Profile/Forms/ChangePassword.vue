<template>
  <BaseCard title="Change password">
    <form
      class="max-w-[500px]"
      @submit.prevent
    >
      <BaseInput
        id="newPassword"
        v-model="formData.password"
        type="password"
        label="New password"
        placeholder="Something secret but new!"
      />
      <BaseInput
        id="newPasswordConfirmation"
        v-model="formData.passwordConfirmation"
        type="password"
        label="Confirm new password"
        placeholder="Something secret but new, again!"
      />
      <BaseButton
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
    <template #title>Changed!</template>
    <template #content>
      <div class="text-center">You successfully changed your password!</div>
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
  password: '',
  passwordConfirmation: '',
});

const userCloseModal = () => {
  if (!isUpdateLoading.value) {
    hideModal();
    formData.value.password = '';
    formData.value.passwordConfirmation = '';
  }
};

const saveInformation = () => {
  const { password, passwordConfirmation } = formData.value;

  if (!(password || passwordConfirmation)) {
    console.warn('No password provided.');
  } else if (password !== passwordConfirmation) {
    console.warn('Passwords are not equal.');
  } else if (password.length < 6) {
    console.warn('Your password should be at least 6 characters.');
  } else {
    updateUser({ password }, { onSuccess: showModal });
  }
};
</script>
