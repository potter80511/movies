<template>
  <div id="films">
    <div class="banner" ref="bannerSlide">
      <swiper :options="swiperBanner"
                v-if="bannerData.length > 0">
        <swiper-slide
          v-for="(item, i) in bannerData"
          :key="i"
          :style="{backgroundImage: 'url(' + item + ')', height: 500 + 'px'}"
          >
          <!-- <img :src="item" /> -->
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
    <div class="film_list">
      <div class="container">
        <div class="section-header">
          <h2 v-if="$route.name === 'movies'">電影列表<span>Movies</span></h2>
          <h2 v-else-if="$route.name === 'series'">影集列表<span>Series</span></h2>
        </div>
        <div class="row list_content">
          <div class="item col-lg-4 col-6"
            v-for="(item, i) in filmsData"
            :key="i"
            >
            <div>
              <div class="image">
                <router-link :to="{ name: 'film details', params: {id: item.imdb_id}}">
                  <img :src="item.wallpaper" />
                </router-link>
              </div>
              <div class="film_content">
                <h2 class="name">{{item.tw_name}}</h2>
                <div class="rates">
                  <span v-for="(star, j) in rateStarWithEmpty(item.rates)"
                      :key="j">
                    <font-awesome-icon v-if="star==='star'" icon="star" />
                    <font-awesome-icon v-if="star==='half'" icon="star-half-alt" />
                    <font-awesome-icon v-if="star==='empty'" :icon="['far', 'star']"/>
                  </span>
                  <b>{{item.rates.toFixed(1)}}</b>
                </div>
                <div class="director">
                  <b>導演：</b>
                  <div>
                    <span v-for="(d, i) in objToArray(item.directors)"
                      :key="i">
                    {{d}}
                    </span>
                  </div>
                </div>
                <div class="cast">
                  <b>主演：</b>
                  <div>
                    <span v-for="(c, i) in objToArray(item.cast)"
                      :key="i">
                    {{c}}
                    </span>
                  </div>
                </div>
                <div class="year">
                  <b>年份：</b>{{item.year}} 年
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { rateStarWithEmpty } from '../helper';
  import { objToArray } from '../helper';

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
        },
        directorData: []
      }
    },
    computed: {
      filmsData() {
        const routeType = this.$route.name
        if(routeType === 'movies') {
          return this.$store.state.movies.sort((a,b) => {
            return b.rates - a.rates;
          })
        } else if (routeType === 'series') {
          return this.$store.state.series.sort((a,b) => {
            return b.rates - a.rates;
          })
        }
      },
      bannerData() {
        const routeType = this.$route.name
        if(routeType === 'movies') {
          return this.$store.getters.moviesBanner
        } else if (routeType === 'series') {
          return this.$store.getters.seriesBanner
        }
        return []
      },
    },
    methods: {
      rateStarWithEmpty(rates) {
        return rateStarWithEmpty(rates)
      },
      objToArray(obj) {
        return objToArray(obj)
      },
      // bannerRWD() {
      //   const bannerWidth = this.$refs.bannerSlide.clientWidth;
      //   return bannerRWD(bannerWidth);
      // }
    }
  };
</script>

<style lang="scss">
  @import "../assets/scss/films.scss";
</style>