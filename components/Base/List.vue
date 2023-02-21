<template>
  <Disclosure>
    <DisclosureButton class="py-2">
      {{ title }}
    </DisclosureButton>
    <DisclosurePanel class="text-gray-500">
      {{ longText }}
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

defineProps<{
  title: string;
  longText: string;
}>();
</script>
