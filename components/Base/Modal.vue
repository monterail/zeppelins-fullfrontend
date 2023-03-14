<template>
  <TransitionRoot
    appear
    :show="isShown"
    as="template"
  >
    <Dialog
      as="div"
      class="relative z-10"
      @click="$emit('close')"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              v-loading="isLoading"
              class="w-full relative max-w-md transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all"
            >
              <BaseButton
                class="absolute right-4 top-4"
                variant="text"
                @click="$emit('close')"
              >
                <CloseIcon class="hover:brightness-110 transition-all" />
              </BaseButton>
              <DialogTitle
                as="h3"
                class="text-4xl leading-tight font-medium text-gray-900 max-w-xs px-3 mx-auto text-center"
              >
                <slot name="title" />
              </DialogTitle>
              <div class="mt-5">
                <slot name="content" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';
import CloseIcon from '@/assets/icons/close-icon.svg?skipsvgo';

defineProps<{
  isShown: boolean;
  isLoading: boolean;
}>();

defineEmits<{
  (e: 'close'): void;
}>();
</script>
