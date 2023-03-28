<template>
  <div>
    <label
      :class="inputClasses"
      :accept="accept"
      draggable="true"
      @dragstart="handleDragStart"
      @dragenter="handleDragEnter"
      @dragleave="handleDragLeave"
      @dragover="handleDragOver"
      @drop.prevent="handleDrop"
      @change="handleChange"
    >
      <slot v-if="!selectedFile && !isError" />
      <p
        v-else
        class="text-xs"
      >
        {{ inputMessage }}
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

const inputClasses = computed(() => {
  return isError.value ? 'input-error' : 'input-default';
});
const inputMessage = computed(() => {
  return isError.value
    ? 'Incorrect file type uploaded. Drop a correct file type.'
    : selectedFile.value?.name;
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
  if (event.dataTransfer) event.dataTransfer.setData('text/plain', 'dragging');
};
const handleDragEnter = (event: DragEvent) => event.preventDefault();
const handleDragLeave = (event: DragEvent) => event.preventDefault();
const handleDragOver = (event: DragEvent) => event.preventDefault();
const handleDrop = (event: DragEvent) => {
  if (event.dataTransfer) {
    selectedFile.value = validateFileType(event.dataTransfer.files);
    emit('update:file', selectedFile.value);
  }
};
const handleChange = () => {
  if (fileInput.value.files) {
    selectedFile.value = validateFileType(fileInput.value.files);
    if (props.accept === '.*') {
      emit('update:file', selectedFile.value);
    }
  }
};
</script>

<style scoped>
.input-default {
  @apply flex h-20 w-full flex-col items-center justify-center rounded-3xl border-[2px] border-dashed bg-gray-100 p-3;
}

.input-error {
  @apply flex h-20 w-full flex-col items-center justify-center rounded-3xl border-[2px] border-dashed bg-red-100 border-red-500 text-red-500 p-3;
}
</style>
