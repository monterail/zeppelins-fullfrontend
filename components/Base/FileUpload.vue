<template>
  <div>
    <label
      class="flex flex-col items-center justify-center w-full bg-gray-100 border-[2px] border-dashed h-20 rounded-3xl"
      :accept="accept"
      draggable="true"
      @dragstart="handleDragStart"
      @dragenter="handleDragEnter"
      @dragleave="handleDragLeave"
      @dragover="handleDragOver"
      @drop="handleDrop"
      @change="handleChange"
    >
      <slot v-if="!selectedFile" />
      <p
        v-else
        class="text-xs"
      >
        {{ selectedFile.name }}
      </p>
      <input
        ref="fileInput"
        type="file"
        name="file"
        class="hidden"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    accept?: string;
  }>(),
  {
    accept: '.*',
  },
);

const emit = defineEmits(['update:file']);

const fileInput = ref();
const selectedFile = ref<File | undefined>();

const handleDragStart = (event: DragEvent) => {
  if (event.dataTransfer) event.dataTransfer.setData('text/plain', 'dragging');
};
const handleDragEnter = (event: DragEvent) => event.preventDefault();
const handleDragLeave = (event: DragEvent) => event.preventDefault();
const handleDragOver = (event: DragEvent) => event.preventDefault();
const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  if (event.dataTransfer) {
    selectedFile.value = event.dataTransfer.files[0];
    emit('update:file', selectedFile.value);
  }
};
const handleChange = () => {
  if (fileInput.value.files) {
    selectedFile.value = fileInput.value.files[0];
    emit('update:file', selectedFile.value);
  }
};
</script>
