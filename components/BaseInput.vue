<template>
  <div class="my-4 flex flex-col">
    <label
      v-if="label"
      class="mb-4"
      :for="id"
    >
      {{ label }} {{ required ? ' *' : '' }}
    </label>
    <input
      class="border border-gray-300 rounded rounded-1 px-4 py-2"
      v-bind="$attrs"
      v-model="value"
    />
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: false,
  },
  modelValue: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    required: false,
  },
});
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
