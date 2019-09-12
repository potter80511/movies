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
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="(item, i) in moviesData"
          :key="i">
          <v-img 
            :src="item.wallpaper"
            height="592">
          </v-img>
          <div class="list_content">
            <div class="movie_title">
              <h2>{{ item.name }}</h2>
            </div>
            <div class="movie_discription">
              <p>{{ item.brief }}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      
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
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          navigation: {
            nextEl: '.movie_list .swiper-button-next',
            prevEl: '.movie_list .swiper-button-prev'
          }
        }
      }
    },
    components: {
      HelloWorld,
    },
    computed: {
      moviesData() {
        return this.$store.state.movies
      },
    }
  };
</script>
<style lang="scss" scoped>
  .home {
    .movie_list {
      .list_content {
        * {
          color: #fff;
        }
      }
    }
  }
</style>
