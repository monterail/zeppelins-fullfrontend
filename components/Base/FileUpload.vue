<template>
  <div>
    <label
      :accept="accept"
      :class="inputClasses"
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
        v-else-if="isError"
        class="text-center text-sm"
      >
        Incorrect file type provided.
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
const props = withDefaults(
  defineProps<{
    accept?: string;
  }>(),
  {
    accept: '.*',
  },
);

const emit = defineEmits(['update:file']);

const fileInput = ref();
const isError = ref(false);
const selectedFile = ref<File | undefined>();
const isUploadDraggedOver = ref(false);

const inputClasses = computed(() => {
  return [
    'input',
    { 'input-ondragover': isUploadDraggedOver.value },
    { 'input-error': isError.value },
  ];
});

const validateFileType = (loadFiles: FileList): File | undefined => {
  const acceptedList = props.accept.split(',');
  const loadFile = loadFiles[0];
  if (
    props.accept === '.*' ||
    acceptedList.some((i) => loadFile.name.includes(i))
  ) {
    isError.value = false;
    return loadFile;
  } else {
    isError.value = true;
  }
};

const handleDragStart = (event: DragEvent) => {
  isUploadDraggedOver.value = true;
  if (event.dataTransfer) event.dataTransfer.setData('text/plain', 'dragging');
};

const handleDrop = (event: DragEvent) => {
  if (event.dataTransfer) {
    selectedFile.value = validateFileType(event.dataTransfer.files);
    emit('update:file', selectedFile.value);
    isUploadDraggedOver.value = false;
  }
};

const handleChange = () => {
  if (fileInput.value.files) {
    selectedFile.value = validateFileType(fileInput.value.files);
    emit('update:file', selectedFile.value);
    isUploadDraggedOver.value = false;
  }
};
</script>

<style scoped>
.input {
  @apply flex h-20 w-full flex-col items-center justify-center rounded-3xl border-[2px] border-dashed bg-gray-100 p-3;
}

.input-error {
  @apply bg-red-100 border-red-500 text-red-500;
}

.input-ondragover {
  @apply !bg-gray-300;
}
</style>
