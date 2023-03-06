<template>
  <div>
    <p class="mb-7 text-2xl">License</p>
    <BaseFileUpload 
      accept=".pdf,.doc,.docx,.odt,.jpg,.jpeg,.png,.bmp"
      @update:file="$emit('update:license', $event)"
    >
      Drag & drop your license scan here
    </BaseFileUpload>
  </div>
</template>

<script setup lang="ts">
defineEmits(['update:license'])
</script>
