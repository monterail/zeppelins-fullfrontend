<template>
  <div class="grid grid-cols-3 place-items-center w-[125px] gap-x-1">
    <BaseCounterButton
      v-model:counter="count"
      type="plus"
      class="w-[25px]"
      @click="$emit('update:count', count)"
    />
    <p class="w-[75px] text-center font-medium text-sm">{{ count }} days</p>
    <BaseCounterButton
      v-model:counter="count"
      type="minus"
      class="w-[25px]"
      @click="$emit('update:count', count)"
    />
  </div>
</template>

<script setup lang="ts">
const count = ref(1);

defineEmits(['update:count']);
</script>

<style scoped></style>
