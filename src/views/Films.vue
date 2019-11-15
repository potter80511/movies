<template>
  <div class="films">
    fds
    <!-- <div class="banner" ref="bannerSlide">
      <swiper :options="swiperBanner"
                v-if="bannerData.length > 0">
        <swiper-slide
          v-for="(item, i) in bannerData"
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
    </div> -->
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