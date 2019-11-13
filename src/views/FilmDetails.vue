<template>
  <div class="film_details">
    {{filmData}}
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
      <div class="main"></div>
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