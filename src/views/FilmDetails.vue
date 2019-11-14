<template>
  <div class="film_details">
    <div class="banner" ref="bannerSlide">
      <swiper :options="swiperBanner"
                v-if="bannerData.length > 0">
        <swiper-slide
          v-for="(item, i) in bannerData"
          :key="i"
          >
          <img :src="item" />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev swiper-button" slot="button-prev">
      </div>
      <div class="swiper-button-next swiper-button" slot="button-next">
      </div>
    </div>
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
            <div>{{bannerData}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
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
        filmData: {
          favorite: false,
          imdb_id: "",
          my_rate: 0,
          name: "",
          page_banners: {},
          rates: 0,
          tw_name: "",
          type: "",
          wallpaper: ""
        },
        bannerData: []
      }
    },
    computed: {
      getFilmData() {
        return this.$store.state.currentFilm
      },
    },
    created() {
      this.$store.dispatch('loadedFilm', this.$route.params.id)
    },
    watch: {
      getFilmData(val) {
        if (val) {
          const obj = val.page_banners
          const bannerArr = []
          const objKeys = Object.keys(obj)

          objKeys.forEach((objKey) => {
            bannerArr.push(obj[objKey])
          })
          this.bannerData = bannerArr
          this.filmData = val
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/film_details.scss";
</style>