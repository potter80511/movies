<template>
  <div class="film_details">
    <!-- <div class="banner" ref="bannerSlide">
      <swiper :options="swiperBanner"
                v-if="indexBannerData.length > 0">
        <swiper-slide
          v-for="(item, i) in indexBannerData"
          :key="i"
          :style="{'background-image': 'url(' + item.banner + ')', height: bannerRWD() + 'px'}"
          >
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
    <div class="container">
      <div class="main">
        <div class="row">
          <div class="wallpaper">
            <img :src="filmData.wallpaper" />
          </div>
          <div class="main_info">
            <h1>{{filmData.name}}</h1>
            <h2 class="tw_name">
              <b>中文片名：</b>
              <span>{{filmData.tw_name}}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    computed: {
      filmData() {
        return this.$store.state.currentFilm
      },
    },
    mounted() {
      this.$store.dispatch('loadedFilm', this.$route.params.id)
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/film_details.scss";
</style>