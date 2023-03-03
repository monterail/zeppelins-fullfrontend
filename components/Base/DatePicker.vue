<template>
  <label
    :for="name"
    class="inline-block min-w-[250px]"
  >
    <slot class="block mb-7" />
    <input
      type="date"
      id="`date-picker__${name}`"
      :name="name"
      :value="new Date().toJSON().slice(0, 10)"
      @change="$emit('update:date', ($event.target as HTMLInputElement).value)"
      class="block p-3 border rounded border-gray-300 text-xs w-full max-w-md"
    />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  name?: string;
  disabled?: boolean;
  date: string;
}>();

defineEmits(['update:date']);
</script>

<style scoped>
/* input[type='date']::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
} */
</style>
