<template>
  <div>
    <label
      class="flex h-20 w-full flex-col items-center justify-center rounded-3xl border-[2px] border-dashed bg-gray-100 p-3"
      :accept="accept"
      draggable="true"
      @dragstart="handleDragStart"
      @dragenter="handleDragEnter"
      @dragleave="handleDragLeave"
      @dragover="handleDragOver"
      @drop.prevent="handleDrop"
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
        :accept="accept"
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
