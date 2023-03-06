<template>
  <BaseModal
    :is-shown="isShown"
    :is-loading="isLoading"
    @close="closeModal"
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
      <template v-else-if="authStep === 'info'">
        <span class="inline-block w-full">Thanks for</span>
        signing up!
      </template>
    </template>
    <template
      v-if="authStep !== 'info'"
      #content
    >
      <BaseInput
        v-if="authStep === 'signup'"
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
        v-if="authStep === 'signup'"
        id="password"
        v-model="formData.passwordConfirm"
        type="password"
        label="Password confirmation"
        placeholder="Something secret, second time!"
      />
      <div
        class="flex flex-col items-center justify-center border-t border-grey border-gray-300 mt-5"
      >
        <BaseButton
          class="w-40 my-3"
          @click="submitAuth"
        >
          {{ authStep === 'login' ? 'Sign in' : 'Sign up' }}
        </BaseButton>
        <span class="text-sm">
          {{ authStep === 'login' ? `Don't` : 'Already' }} have an account?
          <BaseButton
            variant="text"
            class="text-blue-200"
            @click="switchStep"
          >
            {{ authStep === 'login' ? 'Sign up' : 'Sign in' }}
          </BaseButton>
        </span>
      </div>
    </template>
    <template
      v-else
      #content
    >
      <span class="block">
        An email will be sent to
        <strong v-if="formData.email">
          {{ formData.email }}
        </strong>
        <template v-else>your address</template>
        with a confirmation link.
      </span>
      <span class="block mt-1">Click it to activate your account!</span>
      <div class="flex justify-center mt-5">
        <BaseButton
          class="w-40"
          @click="closeModal"
        >
          Okay, got it!
        </BaseButton>
      </div>
    </template>
  </BaseModal>
</template>

<script lang="ts" setup>
const { authStep, formData, isShown, hide } = useAuthModal();

const isLoading = ref(false); // todo: isLoading value from VueQuery

function closeModal() {
  if (!isLoading.value) {
    hide();
  }
}

function switchStep() {
  if (authStep.value === 'login') {
    authStep.value = 'signup';
  } else {
    authStep.value = 'login';
  }
}

async function submitAuth() {
  if (authStep.value === 'signup') {
    // todo: API call
    await new Promise((resolve) => {
      isLoading.value = true;
      setTimeout(() => {
        resolve(true);
        isLoading.value = false;
      }, 2000);
    });
    // ------------
    authStep.value = 'info';
  } else {
    // todo: API call
    await new Promise((resolve) => {
      isLoading.value = true;
      setTimeout(() => {
        resolve(true);
        isLoading.value = false;
      }, 2000);
    });
    // ------------
    closeModal();
  }
}
</script>
