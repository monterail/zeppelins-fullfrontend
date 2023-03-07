<template>
  <label
    :for="name"
    class="inline-block min-w-[250px]"
  >
    <slot class="block mb-7" />
    <input
      :id="`date-picker__${name}`"
      type="date"
      :name="name"
      :value="currentDate"
      class="block p-3 border rounded border-gray-300 text-xs w-full max-w-md"
      @change="handleChange"
    />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  name?: string;
  disabled?: boolean;
}>();

const emit = defineEmits(['update:date']);

const currentDate = new Date().toJSON().slice(0, 10);

const handleChange = ($event: Event) =>
  emit('update:date', ($event.target as HTMLInputElement).value);
</script>
