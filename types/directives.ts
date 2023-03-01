import { ObjectDirective, DirectiveBinding } from 'nuxt/dist/app/compat/capi';

export type LoadingValue = boolean | undefined;

export type LoadingBinding = DirectiveBinding<LoadingValue>;

export type LoadingDirective = ObjectDirective<HTMLElement, LoadingValue>;
