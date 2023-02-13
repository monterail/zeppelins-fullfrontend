<script setup lang="ts">
import BaseButton from './src/components/base/Button.vue';
</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <div>
      <BaseButton>Defaults</BaseButton>
      <BaseButton variant="fill">Fill</BaseButton>
      <BaseButton variant="outline">Outline</BaseButton>
      <BaseButton
        variant="fill"
        arrow="right"
        >Fill</BaseButton
      >
      <BaseButton
        variant="outline"
        arrow="left"
        >Outline</BaseButton
      >
      <BaseButton
        variant="fill"
        type="icon-round"
        >Icon only</BaseButton
      >
      <BaseButton
        variant="outline"
        type="icon-sqaure"
        >Icon only</BaseButton
      >
      <BaseButton href="#">Link</BaseButton>
      <BaseButton to="/home">RouterLink</BaseButton>
    </div>
  </div>
</template>
