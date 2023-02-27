import '@/assets/css/directives.css';
import {
  LoadingValue,
  LoadingBinding,
  LoadingDirective,
} from '@/types/directives';

export default defineNuxtPlugin((nuxt) => {
  const LOADING_CLASS = 'v-loading';

  const setLoadingClass = (el: HTMLElement, value: LoadingValue) => {
    if (value || value === undefined) {
      el.classList.add(LOADING_CLASS);
    } else {
      el.classList.remove(LOADING_CLASS);
    }
  };

  const vLoading: LoadingDirective = {
    mounted(el, { value }) {
      setLoadingClass(el, value);
    },
    updated(el, { value }) {
      setLoadingClass(el, value);
    },
    getSSRProps({ value }: LoadingBinding) {
      return {
        class: value || value === undefined ? LOADING_CLASS : '',
      };
    },
  };

  nuxt.vueApp.directive('loading', vLoading);
});
