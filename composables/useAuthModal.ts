import { computed, ref } from 'vue';
import { AuthStep } from '@/types/modals';

const shown = ref(false);

const formData = ref({
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
});

const authStep: AuthStep = ref('login');

export function useAuthModal() {
  const isShown = computed(() => shown.value);

  const resetForm = () => {
    formData.value.name = '';
    formData.value.email = '';
    formData.value.password = '';
    formData.value.passwordConfirm = '';
  };

  const show = () => {
    authStep.value = 'login';
    resetForm();
    shown.value = true;
  };

  const hide = () => (shown.value = false);

  return {
    authStep,
    formData,
    isShown,
    show,
    hide,
  };
}
