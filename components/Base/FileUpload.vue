<template>
  <div class="main">
    <div class="w-full bg-gray-100 border-1 border-dashed h-20 rounded-3xl">
      <input
        id="fileInput"
        type="file"
        name="file"
        class="hidden"
        @change="handleChange"
      />
      <label
        for="fileInput"
        class="file-label w-full h-full flex justify-center items-center cursor-pointer"
      >
        <div v-if="file">
          {{ file.name }}
        </div>
        <div v-else>
          <slot />
        </div>
      </label>
    </div>
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

const emit = defineEmits(['update:file'])

const file = ref();

const handleChange = (e: Event) => {
  const target = <HTMLInputElement>e.target
  if (target.files && target.files[0]) {
    const incoming = target.files[0];
    file.value = incoming;
    emit('update:file', file.value)
  }
};
</script>
