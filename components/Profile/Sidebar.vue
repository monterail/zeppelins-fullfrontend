<template>
  <div class="flex flex-col">
    <div
      v-for="(nav, index) of profileNavigation"
      :key="nav.href"
      class="cursor-pointer border border-gray-300 py-3.5 px-5 hover:font-semibold"
      :class="{
        'border-r-2 !border-r-blue-200 font-semibold': $route.path === nav.href,
        'border-b-0': index !== profileNavigation.length - 1,
      }"
      @click="onClick(nav)"
    >
      <template v-if="nav.click">
        <div class="flex gap-2.5">
          <span>
            {{ nav.name }}
          </span>
          <ArrowRightIcon
            v-if="nav.click"
            class="relative top-[1px] w-[20px] fill-black"
          />
        </div>
      </template>
      <template v-else>
        {{ nav.name }}
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArrowRightIcon from '~/assets/icons/arrow-right.svg?skipsvgo';
interface Navigation {
  name: string;
  href: string;
  click?: boolean;
  action?: string;
}

const profileNavigation: Navigation[] = [
  {
    name: 'My Bookings',
    href: '/profile/bookings',
  },
  {
    name: 'Personal Details',
    href: '/profile/details',
  },
  {
    name: 'Log out',
    href: '',
    click: true,
    action: 'logout',
  },
];
const logout = () => {
  const { mutate: signout } = useUserSignout();
  signout();
  navigateTo('/');
};

const onClick = (navigation: Navigation) => {
  if (navigation.action === 'logout') {
    logout();
  } else {
    navigateTo(navigation.href);
  }
};
</script>
