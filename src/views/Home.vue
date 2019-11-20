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
      :type="'series'"
      :blockClass="'series_list'"
      :sectionTitle="'最愛影集'"
      :subTitle="'Favorite Series'"
      :filmsData="seriesData"
    />
    <IndexList
      :blockId="'movies'"
      :type="'movies'"
      :blockClass="'movies_list'"
      :sectionTitle="'最愛電影'"
      :subTitle="'Favorite Movies'"
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
