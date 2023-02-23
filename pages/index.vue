<template>
  <div class="w-full grid grid-cols-2 gap-y-7 gap-x-10 grid-rows-2 mt-8 mb-20">
    <RedirectionBanner
      link="/"
      header="Best zeppelins"
      subheader="Lowest prices"
      :background-image="backgroundImage"
      :cta="{ title: 'Check out our flying boys', href: '#', isButton: true }"
      class="col-span-2 h-56"
    />
    <RedirectionBanner
      link="/"
      header="Company with decades of history"
      :background-image="backgroundImage"
      transparent-background
      :cta="{ title: 'Read more', href: '#' }"
      class="col-span-1 h-56"
    />
    <RedirectionBanner
      link="/"
      header="Need help?"
      :background-image="backgroundImage"
      transparent-background
      :cta="{ title: 'Contact us', href: '#' }"
      class="col-span-1 h-56"
    />
  </div>
  <HomePopular />
</template>

<script lang="ts" setup>
const backgroundImage = {
  path: 'https://imgs.smoothradio.com/images/191589?width=1200&crop=16_9&signature=GRazrMVlAISqkcXrrNA6ku356R0=',
  alt: 'Zeppelin image',
};
</script>
