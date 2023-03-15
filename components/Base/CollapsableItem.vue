<template>
  <Disclosure v-slot="{ open }">
    <DisclosureButton
      class="flex h-14 w-full items-center justify-between border-b border-solid border-b-gray-200 text-sm font-normal leading-normal"
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
    <DisclosurePanel class="my-3 text-xs">
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
