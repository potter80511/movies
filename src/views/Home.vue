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
    <div id="series" class="lists series_list">
      <div class="container">
        <div class="section-header">
          <h2>Favorite Series</h2>
        </div>
        <swiper 
          :options="swiperFavoriteSeries"
          v-if="seriesData.length > 0">
          <swiper-slide
            v-for="(item, i) in seriesData"
            :key="i">
            <div>
              <img :src="item.wallpaper">
            </div>
            <div class="list_content">
              <div class="rates">
                <span v-for="(star, j) in rateStarWithEmpty(item.rates)"
                      :key="j">
                  <font-awesome-icon v-if="star==='star'" icon="star" />
                  <font-awesome-icon v-if="star==='half'" icon="star-half-alt" />
                  <font-awesome-icon v-if="star==='empty'" :icon="['far', 'star']"/>
                </span>
                <b>{{item.rates.toFixed(1)}}</b>
              </div>
              <div class="movie_title">
                <h2>{{ item.name }}</h2>
              </div>
              <div class="discription">
                <p>{{ item.brief }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button" slot="button-next"></div>
    </div>
    <div id="movies" class="lists movie_list">
      <div class="container">
        <div class="section-header">
          <h2>Favorite Movies</h2>
        </div>
        <swiper :options="swiperFavoriteMovies"
                v-if="moviesData.length > 0">
          <swiper-slide
            v-for="(item, i) in moviesData"
            :key="i">
            <div>
              <img :src="item.wallpaper">
            </div>
            <div class="list_content">
              <div class="rates">
                <span v-for="(star, j) in rateStarWithEmpty(item.rates)"
                      :key="j">
                  <font-awesome-icon v-if="star==='star'" icon="star" />
                  <font-awesome-icon v-if="star==='half'" icon="star-half-alt" />
                  <font-awesome-icon v-if="star==='empty'" :icon="['far', 'star']"/>
                </span>
                <b>{{item.rates.toFixed(1)}}</b>
              </div>
              <div class="movie_title">
                <h2>{{ item.name }}</h2>
              </div>
              <div class="discription">
                <p>{{ item.brief }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld';
  import { rateStarWithEmpty } from '../helper';

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
        swiperFavoriteSeries: {
          slidesPerView: 5,
          spaceBetween: 30,
          speed: 800,
          loop: true,
          // autoplay: {
          //   delay: 4000,
          //   disableOnInteraction: false,
          // },
          breakpoints: {
            1199: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
          },
          navigation: {
            nextEl: '.series_list .swiper-button-next',
            prevEl: '.series_list .swiper-button-prev',
          }
        },
        swiperFavoriteMovies: {
          slidesPerView: 5,
          spaceBetween: 30,
          speed: 800,
          loop: true,
          // autoplay: {
          //   delay: 4000,
          //   disableOnInteraction: false,
          // },
          breakpoints: {
            1199: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
          },
          navigation: {
            nextEl: '.movie_list .swiper-button-next',
            prevEl: '.movie_list .swiper-button-prev',
          }
        },
      }
    },
    computed: {
      moviesData() {
        return this.$store.getters.filterFavoriteMovies.sort((a,b) => {
          return b.rates - a.rates ;
        })
      },
      seriesData() {
        return this.$store.getters.filterFavoriteSeries.sort((a,b) => {
          return b.rates - a.rates ;
        })
      },
    },
    methods: {
      rateStarWithEmpty(rates) {
        return rateStarWithEmpty(rates)
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../assets/scss/home.scss";
</style>
