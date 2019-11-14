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
        <div class="row main_info">
          <div class="wallpaper">
            <img :src="filmData.wallpaper" />
          </div>
          <div class="words">
            <h1>
              <div class="favorite" v-if="filmData.favorite">
                <font-awesome-icon icon="crown" />
              </div>
              {{filmData.name}}
            </h1>
            <h2 class="tw_name">
              <b>中文片名：</b>
              <span>{{filmData.tw_name}}</span>
            </h2>
            <div class="director dimond">
              <b>導演：</b>
              <span>{{filmData.director}}</span>
            </div>
            <div class="type dimond">
              <b>類型：</b>
              <span v-if="filmData.type === 'series'">影集</span>
              <span v-else-if="filmData.type === 'movies'">電影</span>
            </div>
            <div class="rates">
              <b><font-awesome-icon :icon="['fab', 'imdb']" /> 評分：</b>
              <span v-for="(star, j) in rateTenStar(filmData.rates)"
                      :key="j">
                <font-awesome-icon v-if="star==='star'" icon="star" />
                <font-awesome-icon v-if="star==='half'" icon="star-half-alt" />
                <font-awesome-icon v-if="star==='empty'" :icon="['far', 'star']"/>
              </span>
              <b>{{filmData.rates.toFixed(1)}} 分</b>
            </div>
            <div class="my_rate">
              <font-awesome-icon icon="check" />
              <b>我的評分：</b>
              <span v-for="(star, j) in rateTenStar(filmData.my_rate)"
                      :key="j">
                <font-awesome-icon v-if="star==='star'" icon="star" />
                <font-awesome-icon v-if="star==='half'" icon="star-half-alt" />
                <font-awesome-icon v-if="star==='empty'" :icon="['far', 'star']"/>
              </span>
              <b>{{filmData.my_rate.toFixed(1)}} 分</b>
            </div>
          </div>
        </div>
        <div class="main_intro">
          <div class="blocks">
            <h3><span class="circle"></span>劇情介紹</h3>
            <p>{{filmData.summary}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { rateTenStar } from '../helper';

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
          director: "",
          favorite: false,
          imdb_id: "",
          my_rate: 0,
          name: "",
          page_banners: {},
          rates: 0,
          summary: "",
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
    methods: {
      rateTenStar(rates) {
        return rateTenStar(rates)
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