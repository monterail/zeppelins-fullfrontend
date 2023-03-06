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
        <div v-else-if="isDragging">Release to drop files here.</div>
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

const file = ref();

const handleChange = (e: Event) => {
  if (e.target.files && e.target.files[0]) {
    const incoming = e.target.files[0];
    // const fileSize = Math.round((file.size / 1024 / 1024) * 100) / 100;
    // const fileExtention = file.name.split('.').pop();
    // const fileName = file.name.split('.').shift();
    // const isImage = ['jpg', 'jpeg', 'png', 'gif'].includes(fileExtention);
    console.log(incoming);
    file.value = incoming;
  }
};
</script>
