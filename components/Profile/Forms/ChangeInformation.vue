<template>
  <BaseCard title="Personal information">
    <form
      class="max-w-[500px]"
      @submit.prevent
    >
      <BaseInput
        id="email"
        v-model="formData.name"
        type="email"
        label="Name"
        placeholder="Enter your name"
      />
      <p class="mb-7 text-base">Pilot license</p>
      <BaseFileUpload
        accept=".pdf,.doc,.docx,.odt,.jpg,.jpeg,.png,.bmp"
        @update:file="handleChange"
      >
        Drag & drop your license scan here
      </BaseFileUpload>
      <BaseButton
        class="mt-5 w-40"
        @click.prevent="saveInformation"
      >
        Save
      </BaseButton>
    </form>
  </BaseCard>
</template>

<script setup lang="ts">
const formData = ref({
  name: '',
  file: null as File | null,
});

const saveInformation = () => {
  console.warn(formData.value);
};

const handleChange = (event: File) => {
  formData.value.file = event;
};
</script>
