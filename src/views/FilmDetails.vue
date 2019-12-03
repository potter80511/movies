<template>
  <div class="film_details">
    <BannerSlide
      :bannerData="bannerData"
    />
    <div class="container">
      <div class="main">
        <div class="row main_info">
          <div class="row">
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
              <div class="type">
                <b>類型：</b>
                <router-link :to="'/series'" v-if="filmData.type === 'series'">影集</router-link>
                <router-link :to="'/movies'" v-else-if="filmData.type === 'movies'">電影</router-link>
              </div>
              <div class="director" v-if="filmData.type === 'movies' && filmData.director">
                <b>導演：</b>
                <div>
                  <span>{{filmData.director}}</span>
                </div>
              </div>
              <div class="writers" v-else-if="filmData.type === 'series' && writersData.length > 0">
                <b>編劇：</b>
                <div>
                  <span v-for="(item, i) in writersData"
                        :key="i"
                  >{{item}}</span>
                </div>
              </div>
              <div class="categories" v-if="cateData.length > 0">
                <b>種類：</b>
                <div>
                  <span v-for="(item, i) in cateData"
                        :key="i"
                  >{{item}}</span>
                </div>
              </div>
              <div class="casts" v-if="castData">
                <b>主演：</b>
                <div>
                  <span v-for="(item, i) in castData"
                        :key="i"
                  >{{item}}</span>
                </div>
              </div>
              <div class="year" v-if="filmData.year">
                <b>年份：</b>
                <span>{{filmData.year}} 年</span>
              </div>
              <div class="end" v-if="filmData.type === 'series'">
                <span class="still" v-if="filmData.still">
                  未完結
                  <span class="total" v-if="seasonsData.length > 0">，目前季數 <b>{{seasonsData.length}}</b> 季</span>
                </span>
                <span v-else>
                  已完結
                  <span class="total" v-if="seasonsData.length > 0">，共 <b>{{seasonsData.length}}</b> 季</span>
                </span>
              </div>
              <div class="favorite" v-if="filmData.favorite">
                <span v-if="filmData.type === 'movies'">最愛電影</span>
                <span v-else-if="filmData.type === 'series'">最愛影集</span>
              </div>
            </div>
          </div>
        </div>
        <div class="main_intro">
          <div class="blocks">
            <h3><span class="circle"></span>劇情介紹</h3>
            <div v-html="filmData.summary"></div>
          </div>
          <div class="blocks related" v-if="relatedData.length > 0">
            <h3><span class="circle"></span>相關續作</h3>
            <div class="content">
              <RelatedFilmsSwiper
                :relatedData="relatedData"
                :blockClass="'related'"
              />
            </div>
          </div>
          <div class="blocks related" v-if="sameDirectorData.length > 0">
            <h3><span class="circle"></span>{{filmData.director}} 執導相關作品</h3>
            <div class="content">
              <RelatedFilmsSwiper
                :relatedData="sameDirectorData"
                :blockClass="'related'"
              />
            </div>
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
  import RelatedFilmsSwiper from '../components/related_film_swiper/RelatedFilmsSwiper';

  export default {
    components: {
      BannerSlide,
      RelatedFilmsSwiper,
    },
    data() {
      return {
        filmData: {
          categories: {},
          cast: {},
          director: "",
          favorite: false,
          imdb_id: "",
          my_rate: 0,
          name: "",
          page_banners: {},
          rates: 0,
          related: "",
          still: false,
          summary: "",
          tw_name: "",
          type: "",
          wallpaper: "",
          year: 0
        },
        bannerData: [],
        writersData: [],
        castData: [],
        cateData: [],
        relatedData: [],
        sameDirectorData: [],
        seasonsData: [],
      }
    },
    computed: {
      getFilmData() {
        return this.$store.state.currentFilm //獲取電影資料
      },
      getRelatedMData() {
        
      }
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
          if (val.writers){
            this.writersData = objToArray(val.writers)
          }

          //種類資料
          if(val.categories) {
            this.cateData = objToArray(val.categories)
          }

          //演員資料
          this.castData = objToArray(val.cast)

          //季數
          if(val.seasons) {
            this.seasonsData = objToArray(val.seasons)
          }

          this.filmData = val //這頁整包電影資料

          const data = this.$store.state.movies;
          //相關續作資料
          const dataRelated = val.related
          const filterData = data.filter((rel) => {
            return rel.related && rel.related === dataRelated && rel.name !== val.name;
          });
          this.relatedData = filterData.sort((a,b) => {
            return a.year - b.year;
          });

          //相關續作資料
          const directorRelated = val.director
          const filterDirectorData = data.filter((rel) => {
            return rel.director && rel.director === directorRelated && rel.name !== val.name;
          });
          this.sameDirectorData = filterDirectorData.sort((a,b) => {
            return b.year - a.year;
          });
        }
      },
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/film_details.scss";
</style>