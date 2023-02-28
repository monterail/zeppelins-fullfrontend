# 3. Styling rules

Date: 2023-02-24

## Status

Accepted

## Context

Our styling approach to keep consistency in the team.

## Decision

For quick and painless styling we use [TailwindCSS](https://tailwindcss.com/).
We also decided ot use [HeadlessUI](https://headlessui.com/) to deliver frequently used components fast and stable.

## Consequences

Tailwind gives us opportunity to deliver fast and well organize styles in the app.

- Always try to use Tailwind classes instead of pure css properties.
- Avoid using inline styles - if you have nonstandard value for some dimension you can pass it in the class (`px-[17px]`).
- If you have conditional styling and need to group you styles you can use custom classes which applies tailwind classes:

```
.custom-class {
  @apply flex px-8 bg-red;
}
```

- Creating new common component first check if HeadlessUI offers similar solution and use it if possible.
- If you want to handle `isLoading` state in some component you can use `v-loading` directive - it will do the job for you:

```
<div v-loading="isLoading" >My div</div>
```
