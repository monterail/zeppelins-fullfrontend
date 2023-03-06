import { Ref } from 'vue';

export type AuthStep = Ref<'login' | 'signup' | 'info'>;
