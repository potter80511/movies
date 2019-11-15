<template>
  <div class="home">
    <div class="banner" ref="bannerSlide">
      <swiper :options="swiperBanner"
                v-if="indexBannerData.length > 0">
        <swiper-slide
          v-for="(item, i) in indexBannerData"
          :key="i"
          >
          <img :src="item.banner" />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev swiper-button" slot="button-prev">
        <font-awesome-icon icon="chevron-left" />
      </div>
      <div class="swiper-button-next swiper-button" slot="button-next">
        <font-awesome-icon icon="chevron-right" />
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
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
              <router-link :to="{ name: 'film details', params: {id: item.imdb_id}}">
                <img :src="item.wallpaper">
              </router-link>
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
              <router-link :to="{ name: 'film details', params: {id: item.imdb_id}}">
                <img :src="item.wallpaper">
              </router-link>
            </div>
            <div class="list_content">
              <div style="color: #fff;">{{item.id}}</div>
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
  import { rateStarWithEmpty } from '../helper';

  export default {
    data () {
      return {
        swiperBanner: {
          speed: 800,
          loop: true,
          effect: 'fade',
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.banner .swiper-button-next',
            prevEl: '.banner .swiper-button-prev',
          },
          pagination: {
            el: '.banner .swiper-pagination',
            clickable: true,
          },
        },
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
          return b.rates - a.rates;
        })
      },
      seriesData() {
        return this.$store.getters.filterFavoriteSeries.sort((a,b) => {
          return b.rates - a.rates;
        })
      },
      indexBannerData() {
        return this.$store.getters.filterIndexBanner;
      },
    },
    methods: {
      rateStarWithEmpty(rates) {
        return rateStarWithEmpty(rates)
      },
      // bannerRWD() {
      //   const bannerWidth = this.$refs.bannerSlide.clientWidth;
      //   return bannerRWD(bannerWidth);
      // }
    }
  };
</script>
<style lang="scss">
  @import "../assets/scss/home.scss";
</style>
