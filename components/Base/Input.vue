<template>
  <div class="my-4 flex flex-col">
    <label
      v-if="label"
      class="mb-2 text-sm"
      :for="id"
    >
      {{ label }} {{ required ? '*' : '' }}
    </label>
    <input
      v-bind="$attrs"
      v-model="value"
      class="rounded-1 rounded border border-gray-300 px-4 py-2 placeholder:font-light"
    />
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
const props = defineProps<{
  label?: string;
  id?: string;
  required?: boolean;
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>
