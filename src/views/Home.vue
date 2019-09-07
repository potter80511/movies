<template>
  <div class="swiper">
    <v-carousel
      height="auto"
      interval="5000">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';

export default {
  data () {
    return {
      items: [
        {
          src: 'https://wallpapercave.com/wp/wp1886209.jpg',
        },
        {
          src: 'https://wallpapertag.com/wallpaper/full/c/3/9/467334-free-download-breaking-bad-wallpaper-1920x1080-1920x1080-for-mac.jpg',
        },
      ],
    }
  },
  components: {
    HelloWorld,
  },
};
</script>
