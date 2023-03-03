<template>
  <RadioGroupOption
    v-slot="{ checked }"
    value="startup"
  >
    <span :class="checked ? 'bg-blue-200' : ''">Startup</span>
  </RadioGroupOption>
</template>
