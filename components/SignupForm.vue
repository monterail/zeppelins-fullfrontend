<template>
  <form @submit.prevent>
    <BaseInput
      id="name"
      v-model="formData.name"
      type="text"
      label="Name"
      placeholder="Jim Zepp"
    />
    <BaseInput
      id="email"
      v-model="formData.email"
      type="email"
      label="E-mail address"
      placeholder="ilovezeppelins@gmail.com"
    />
    <BaseInput
      id="password"
      v-model="formData.password"
      type="password"
      label="Password"
      placeholder="Something secret"
    />
    <BaseInput
      id="confirmation-password"
      v-model="formData.passwordConfirm"
      type="password"
      label="Password confirmation"
      placeholder="Something secret, second time!"
    />
    <div
      class="border-grey mt-5 flex flex-col items-center justify-center border-t border-gray-300"
    >
      <BaseButton
        class="my-3 w-40"
        @click.prevent="$emit('submitSignup')"
      >
        Sign up
      </BaseButton>
      <span class="text-sm">
        Already have an account?
        <BaseButton
          variant="text"
          class="text-blue-200"
          @click.prevent="switchToLogin"
        >
          Sign in
        </BaseButton>
      </span>
    </div>
  </form>
</template>

<script lang="ts" setup>
defineEmits<{
  (e: 'submitSignup'): void;
}>();

const { authStep, formData } = useAuthModal();

const switchToLogin = () => {
  authStep.value = 'login';
};
</script>
