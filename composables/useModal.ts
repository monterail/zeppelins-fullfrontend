import { computed, ref } from 'vue';

const shown = ref(false);

export function useModal() {
  const isShown = computed(() => shown.value);

  const show = () => {
    shown.value = true;
  };

  const hide = () => {
    shown.value = false;
  };

  return {
    isShown,
    show,
    hide,
  };
}
