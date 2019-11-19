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
    <IndexList
      :blockId="'series'"
      :blockClass="'series_list'"
      :sectionTitle="'Favorite Series'"
      :filmsData="seriesData"
    />
    <IndexList
      :blockId="'movies'"
      :blockClass="'movies_list'"
      :sectionTitle="'Favorite Movies'"
      :filmsData="moviesData"
    />
  </div>
</template>

<script>
  import { rateStarWithEmpty } from '../helper';
  import IndexList from '../components/index_lists/IndexList';

  export default {
    components: {
      IndexList,
    },
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
