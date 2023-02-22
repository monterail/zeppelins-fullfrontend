<template>
  <Disclosure v-slot="{ open }">
    <li
      class="flex justify-between h-14 w-full border-b border-solid border-b-gray-200"
    >
      <DisclosureButton
        class="w-full text-sm font-normal leading-normal flex justify-between"
      >
        {{ info.title }}
        <PlusIcon
          v-show="!open"
          class="inline-block"
        />
        <MinusIcon
          v-show="open"
          class="inline-block"
        />
      </DisclosureButton>
    </li>
    <DisclosurePanel class="text-xs mt-3">
      {{ info.description }}
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import PlusIcon from '~/assets/icons/plus.svg?skipsvgo';
import MinusIcon from '~/assets/icons/minus.svg?skipsvgo';

defineProps<{
  info: {
    title: string;
    description: string;
  };
}>();
</script>
