<template>
  <div class="film_details">
    <BannerSlide
      :bannerData="bannerData"
    />
    <div class="container">
      <div class="main">
        <div class="row main_info">
          <div class="wallpaper">
            <img :src="filmData.wallpaper" />
          </div>
          <div class="words">
            <h1>
              <div class="favorite_crown" v-if="filmData.favorite">
                <font-awesome-icon icon="crown" />
              </div>
              {{filmData.name}}
            </h1>
            <h2 class="tw_name" v-if="filmData.tw_name">
              <b>中文片名：</b>
              <span>{{filmData.tw_name}}</span>
            </h2>
            <div class="type dimond">
              <b>類型：</b>
              <span v-if="filmData.type === 'series'">影集</span>
              <span v-else-if="filmData.type === 'movies'">電影</span>
            </div>
            <div class="director dimond" v-if="directorData">
              <b>導演：</b>
              <div>
                <span v-for="(item, i) in directorData"
                      :key="i"
                >{{item}}</span>
              </div>
            </div>
            <div class="casts dimond" v-if="castData">
              <b>主演：</b>
              <div>
                <span v-for="(item, i) in castData"
                      :key="i"
                >{{item}}</span>
              </div>
            </div>
            <div class="rates">
              <b>IMDB 評分：</b>
              <span v-for="(star, j) in rateTenStar(filmData.rates)"
                      :key="j">
                <font-awesome-icon v-if="star==='star'" icon="star" />
                <font-awesome-icon v-if="star==='half'" icon="star-half-alt" />
                <font-awesome-icon v-if="star==='empty'" :icon="['far', 'star']"/>
              </span>
              <b>{{filmData.rates.toFixed(1)}} 分</b>
            </div>
            <div class="my_rate" v-if="filmData.my_rate">
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
            <div class="favorite" v-if="filmData.favorite">
              <span v-if="filmData.type === 'movies'">最愛電影</span>
              <span v-else-if="filmData.type === 'series'">最愛影集</span>
            </div>
          </div>
        </div>
        <div class="main_intro">
          <div class="blocks">
            <h3><span class="circle"></span>劇情介紹</h3>
            <div v-html="filmData.summary"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { rateTenStar } from '../helper';
  import { objToArray } from '../helper';
  import BannerSlide from '../components/BannerSlide';

  export default {
    components: {
      BannerSlide,
    },
    data() {
      return {
        filmData: {
          cast: {},
          directors: {},
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
        bannerData: [],
        directorData: [],
        castData: []
      }
    },
    computed: {
      getFilmData() {
        return this.$store.state.currentFilm //獲取電影資料
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
          //輪播主圖資料
          // console.log(val)
          if(val.page_banners) {
            this.bannerData = objToArray(val.page_banners)
          }

          //導演資料
          this.directorData = objToArray(val.directors)

          //演員資料
          this.castData = objToArray(val.cast)

          this.filmData = val //整包電影資料
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/film_details.scss";
</style>