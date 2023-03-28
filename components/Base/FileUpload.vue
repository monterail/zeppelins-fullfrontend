<template>
  <div>
    <label
      :accept="accept"
      class="flex h-20 w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-[2px] border-dashed border-gray-500 bg-gray-200 p-3 hover:bg-gray-300"
      :class="{ '!bg-gray-300': isUploadDraggedOver }"
      @dragstart.prevent="handleDragStart"
      @dragenter.prevent="isUploadDraggedOver = true"
      @dragleave.prevent="isUploadDraggedOver = false"
      @dragover.prevent="isUploadDraggedOver = true"
      @drop.prevent="handleDrop"
      @change.prevent="handleChange"
    >
      <div
        v-if="isUploadDraggedOver"
        class="text-center text-sm font-bold"
      >
        Yes, drop here!
      </div>
      <div
        v-else-if="!selectedFile"
        class="text-center text-sm"
      >
        <slot />
      </div>
      <div
        v-else
        class="text-center text-sm"
      >
        <p>Selected file:</p>
        <p class="font-bold">
          {{ selectedFile.name }}
        </p>
      </div>
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
const isUploadDraggedOver = ref(false);

const handleDragStart = (event: DragEvent) => {
  isUploadDraggedOver.value = true;
  if (event.dataTransfer) event.dataTransfer.setData('text/plain', 'dragging');
};

const handleDrop = (event: DragEvent) => {
  if (event.dataTransfer) {
    selectedFile.value = event.dataTransfer.files[0];
    emit('update:file', selectedFile.value);
    isUploadDraggedOver.value = false;
  }
};

const handleChange = () => {
  if (fileInput.value.files) {
    selectedFile.value = fileInput.value.files[0];
    emit('update:file', selectedFile.value);
    isUploadDraggedOver.value = false;
  }
};
</script>
