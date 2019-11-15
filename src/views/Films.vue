<template>
  <div class="films">
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
        <div class="row list_content">
          <div class="item"
            v-for="(item, i) in filmsData"
            :key="i"
            >
            <div class="image">
              <img :src="item.wallpaper" />
            </div>
            <div class="film_content">
              <h2 class="name">{{item.tw_name}}</h2>
              <div class="rates">
                <b>{{item.rates}}</b>
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
        // filmsData: []
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
          console.log(this.$store.getters.seriesBanner)
          return this.$store.getters.seriesBanner
        }
        return []
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