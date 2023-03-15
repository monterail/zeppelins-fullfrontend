<template>
  <header class="w-full">
    <div class="w-max-content-w relative mx-auto flex h-12 items-center">
      <nuxt-link to="/">
        <img
          src="/zeppy-logo.png"
          alt="Zappy Logo"
          width="111"
          class="mx-auto"
        />
      </nuxt-link>
      <!-- temporary solution for showing user being logged in & sign out button -->
      <span> {{ userData?.profile_name }}</span>
      <BaseButton
        v-if="userData"
        variant="text"
        class="absolute right-0 top-1/2 ml-auto -translate-y-1/2 transition-transform hover:font-bold"
        @click="signout"
      >
        Sign out
      </BaseButton>
      <BaseButton
        v-else
        variant="text"
        class="absolute right-0 top-1/2 ml-auto max-h-[17px] -translate-y-1/2 transition-transform hover:font-bold"
        @click="showAuthModal"
      >
        Sign in
      </BaseButton>
      <!------------------------->
    </div>
    <menu class="w-max-content-w mx-auto flex h-20">
      <ul class="mx-auto flex w-[400px] items-center justify-between">
        <li
          v-for="link in navLinks"
          :key="link.name"
          class="block"
        >
          <nuxt-link
            :to="link.href"
            class="hover:font-bold"
          >
            {{ link.name }}
          </nuxt-link>
        </li>
      </ul>
    </menu>
  </header>
</template>

<script lang="ts" setup>
const navLinks: Array<{ name: string; href: string }> = [
  { name: 'Home', href: '/' },
  { name: 'Fleet', href: '/fleet' },
  { name: 'About us', href: '#' },
  { name: 'Contact us', href: '#' },
];

const { show: showAuthModal } = useAuthModal();
const { mutate: signout } = useUserSignout();
const { data: userData } = useUserData();
</script>
