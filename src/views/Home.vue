<template>
  <div class="home">
    <BannerSlide
      :bannerData="indexBannerData"
      :paginationOn="true"
    />
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
  import BannerSlide from '../components/BannerSlide';

  export default {
    components: {
      IndexList,
      BannerSlide,
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
