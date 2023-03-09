<template>
  <BaseModal
    :is-shown="isShown"
    :is-loading="isLoading"
    @close="userCloseModal"
  >
    <template #title>
      <template v-if="authStep === 'login'">
        <span class="inline-block w-full">Why hello there,</span>
        please sign in!
      </template>
      <template v-else-if="authStep === 'signup'">
        <span class="inline-block w-full">New here?</span>
        Come and join us!
      </template>
      <template v-else-if="authStep === 'signup-confirmation'">
        <span class="inline-block w-full">Thanks for</span>
        signing up!
      </template>
    </template>
    <template #content>
      <LoginForm
        v-if="authStep === 'login'"
        @submit-login="submitAuth"
      />
      <SignupForm
        v-else-if="authStep === 'signup'"
        @submit-signup="submitAuth"
      />
      <template v-else>
        <span>
          An email will be sent to
          <strong v-if="formData.email">
            {{ formData.email }}
          </strong>
          <template v-else>your address</template>
          with a confirmation link. Click it to activate your account!
        </span>
        <div class="flex justify-center mt-5">
          <BaseButton
            class="w-40"
            @click="userCloseModal"
          >
            Okay, got it!
          </BaseButton>
        </div>
      </template>
    </template>
  </BaseModal>
</template>

<script lang="ts" setup>
const { authStep, formData, isShown, hide } = useAuthModal();
const { isLoading: isSignupLoading, mutate: signup } = useUserSignup();
const { isLoading: isLoginLoading, mutate: login } = useUserLogin();

const isLoading = computed(() => isSignupLoading.value || isLoginLoading.value);

const userCloseModal = () => {
  if (!isLoading.value) hide();
};

const showConfirmationStep = () => {
  authStep.value = 'signup-confirmation';
};

const submitAuth = () => {
  const { email, password, name } = formData.value;
  if (authStep.value === 'signup') {
    signup({ email, password, name }, { onSuccess: showConfirmationStep });
  } else {
    login({ email, password }, { onSuccess: hide });
  }
};
</script>
