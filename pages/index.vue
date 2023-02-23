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

    <ProductsList
      class="col-span-2 mt-14"
      title="Most popular"
      :zeppelins="zeppelins"
    />
  </div>
  <HomePopular />
</template>

<script lang="ts" setup>
const backgroundImage = {
  path: 'https://imgs.smoothradio.com/images/191589?width=1200&crop=16_9&signature=GRazrMVlAISqkcXrrNA6ku356R0=',
  alt: 'Zeppelin image',
};

const zeppelins: ZeppelinTile[] = [
  {
    id: 1,
    image: {
      alt: 'Name',
      path: 'https://picsum.photos/300',
    },
    lowestPrice: 213,
    name: 'Name',
  },
  {
    id: 2,
    image: {
      alt: 'Led Zeppelin',
      path: 'https://picsum.photos/260',
    },
    lowestPrice: 721,
    name: 'Led Zeppelin',
  },
  {
    id: 3,
    image: {
      alt: 'Ten niemiecki',
      path: 'https://picsum.photos/320',
    },
    lowestPrice: 372,
    name: 'Ten niemiecki',
  },
  {
    id: 4,
    image: {
      alt: 'Jeszcze jeden',
      path: 'https://picsum.photos/360',
    },
    lowestPrice: 137,
    name: 'Jeszce jeden',
  },
];
</script>
