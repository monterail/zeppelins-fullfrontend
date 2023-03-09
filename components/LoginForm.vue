<template>
  <form @submit.prevent>
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
    <div
      class="flex flex-col items-center justify-center border-t border-grey border-gray-300 mt-5"
    >
      <BaseButton
        class="w-40 my-3"
        @click.prevent="$emit('submitLogin')"
      >
        Sign in
      </BaseButton>
      <span class="text-sm">
        Don't have an account?
        <BaseButton
          variant="text"
          class="text-blue-200"
          @click.prevent="switchToSignup"
        >
          Sign up
        </BaseButton>
      </span>
    </div>
  </form>
</template>

<script lang="ts" setup>
defineEmits<{
  (e: 'submitLogin'): void;
}>();

const { authStep, formData } = useAuthModal();

const switchToSignup = () => {
  authStep.value = 'signup';
};
</script>
