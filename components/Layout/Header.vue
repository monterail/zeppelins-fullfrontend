<template>
  <header class="w-full">
    <div class="w-max-content-w flex items-center relative h-12 mx-auto">
      <nuxt-link to="/">
        <img
          src="/zeppy-logo.png"
          alt="Zappy Logo"
          width="111"
          class="mx-auto"
        />
      </nuxt-link>
      <!-- temporary solution for showing user being logged in & sign out button -->
      <span> {{ userData?.username }}</span>
      <BaseButton
        v-if="userData"
        variant="text"
        class="ml-auto absolute right-0 top-1/2 transition-transform -translate-y-1/2 hover:font-bold"
        @click="signout"
      >
        Sign out
      </BaseButton>
      <BaseButton
        v-else
        variant="text"
        class="ml-auto absolute right-0 top-1/2 transition-transform -translate-y-1/2 hover:font-bold max-h-[17px]"
        @click="showAuthModal"
      >
        Sign in
      </BaseButton>
      <!------------------------->
    </div>
    <menu class="flex h-20 w-max-content-w mx-auto">
      <ul class="flex justify-between items-center w-[400px] mx-auto">
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
