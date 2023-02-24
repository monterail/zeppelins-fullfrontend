export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('loading', (el, binding) => {
    if (binding.value || binding.value === undefined) {
      el.classList.add('v-loading');
    } else {
      el.classList.remove('v-loading');
    }
  })
});