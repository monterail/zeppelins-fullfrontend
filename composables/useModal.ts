import { computed, ref } from 'vue';

export function useModal() {
  const shown = ref(false);
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
