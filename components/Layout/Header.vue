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
      <BaseButton
        v-if="userData"
        variant="text"
        class="absolute right-16 top-1/2 ml-auto flex -translate-y-1/2 items-center !gap-0.5 transition-transform hover:font-bold"
        @click="openProfile"
      >
        <span>{{ userData?.profile_name }}</span>
        <UserIcon />
      </BaseButton>
      <BaseButton
        v-else
        variant="text"
        class="absolute right-0 top-1/2 ml-auto -translate-y-1/2 transition-transform hover:font-bold"
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
import UserIcon from '~/assets/icons/user.svg?skipsvgo';

const navLinks: Array<{ name: string; href: string }> = [
  { name: 'Home', href: '/' },
  { name: 'Fleet', href: '/fleet' },
  { name: 'About us', href: '#' },
  { name: 'Contact us', href: '#' },
];
const openProfile = () => {
  navigateTo('/profile/bookings');
};
const { show: showAuthModal } = useAuthModal();
const { data: userData } = useUserData();
</script>
