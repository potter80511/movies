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
          :options="swiperFavorites"
          v-if="seriesData.length > 0">
          <swiper-slide
            v-for="(item, i) in seriesData"
            :key="i">
            <div>
              <img :src="item.wallpaper">
            </div>
            <div class="list_content">
              <div class="rates">
                <span v-for="(star, j) in rateStar(item.rates)"
                      :key="j">
                  <font-awesome-icon v-if="star==='star'" icon="star" />
                  <font-awesome-icon v-if="star==='half'" icon="star-half-alt" />
                </span>
                <b>{{item.rates}}</b>
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
        <swiper :options="swiperFavorites">
          <swiper-slide
            v-for="(item, i) in moviesData"
            :key="i">
            <div>
              <img :src="item.wallpaper">
            </div>
            <div class="list_content">
              <div class="rates">
                <span v-for="(star, j) in rateStar(item.rates)"
                      :key="j">
                  <font-awesome-icon v-if="star==='star'" icon="star" />
                  <font-awesome-icon v-if="star==='half'" icon="star-half-alt" />
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
        swiperFavorites: {
          slidesPerView: 5,
          spaceBetween: 30,
          speed: 800,
          loop: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
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
      }
    },
    computed: {
      moviesData() {
        return this.$store.getters.filterFavoriteMovies
      },
      seriesData() {
        return this.$store.getters.filterFavoriteSeries
      },
    },
    methods: {
      rateStar(rates) {
        let num = rates;
        let arr = [];

        for(let i=num; i>0; i -= 2) {

          if(i>=2) {
            arr.push('star')
          } else if(i>=1 && i<2) {
            arr.push('half')
          }
        }
        return arr;
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../assets/scss/home.scss";
</style>
