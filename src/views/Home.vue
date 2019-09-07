<template>
  <div class="home">
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
    <div class="movie_list">
      <v-layout>
        <v-flex md3 
          v-for="(item, i) in moviesData"
          :key="i"
          >
          <v-card>
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-text>{{ item.brief }}</v-card-text>
            <v-card-actions>
              <v-btn text>Click</v-btn>
            </v-card-actions>
          </v-card>  
        </v-flex>
      </v-layout>

    </div>
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
  computed: {
    moviesData() {
      return this.$store.state.movies
    }
  }
};
</script>
