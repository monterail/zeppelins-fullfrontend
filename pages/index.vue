<template>
  <div class="mt-8 mb-20 grid w-full grid-cols-2 grid-rows-2 gap-y-7 gap-x-10">
    <BaseRedirectionBanner
      header="Best zeppelins"
      subheader="Lowest prices"
      :background-image="backgroundImage"
      :cta="{
        title: 'Check out our flying boys',
        to: '/fleet',
        variant: 'fill',
        arrow: 'right',
      }"
      class="col-span-2 h-56"
    />
    <BaseRedirectionBanner
      header="Company with decades of history"
      :background-image="backgroundImage"
      transparent-background
      :cta="{
        title: 'Read more',
        href: '#',
        variant: 'text',
        arrow: 'right',
      }"
      class="col-span-1 h-56"
    />
    <BaseRedirectionBanner
      header="Need help?"
      :background-image="backgroundImage"
      transparent-background
      :cta="{
        title: 'Contact us',
        href: '#',
        variant: 'text',
        arrow: 'right',
      }"
      class="col-span-1 h-56"
    />
    <ProductList
      class="col-span-2 mt-14"
      title="Most popular"
      :zeppelins="zeppelins"
      :is-loading="isLoading"
    />
  </div>
</template>

<script lang="ts" setup>
const backgroundImage = {
  path: 'https://imgs.smoothradio.com/images/191589?width=1200&crop=16_9&signature=GRazrMVlAISqkcXrrNA6ku356R0=',
  alt: 'Zeppelin image',
};

const { data: zeppelins, isLoading } = useProductList(ref(4));
</script>
