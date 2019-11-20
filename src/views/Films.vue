<template>
  <div id="films">
    <BannerSlide
      :bannerData="bannerData"
      :background="true"
    />
    <div class="film_list">
      <div class="container">
        <div class="section-header">
          <h2 v-if="$route.name === 'movies'">電影列表<span>Movies</span></h2>
          <h2 v-else-if="$route.name === 'series'">影集列表<span>Series</span></h2>
        </div>
        <div class="row list_content">
          <div class="item col-lg-4 col-6"
            v-for="(item, i) in filmsData"
            :key="i"
            >
            <router-link :to="{ name: 'film details', params: {id: item.imdb_id}}">
              <div class="image">
                <router-link :to="{ name: 'film details', params: {id: item.imdb_id}}">
                  <img :src="item.wallpaper" />
                </router-link>
              </div>
              <div class="film_content">
                <div style="display: none;">{{item.id}}</div>
                <h3 class="name">{{item.tw_name}}</h3>
                <div class="rates">
                  <b class="title">IMDB：</b>
                  <span v-for="(star, j) in rateStarWithEmpty(item.rates)"
                      :key="j">
                    <font-awesome-icon v-if="star==='star'" icon="star" />
                    <font-awesome-icon v-if="star==='half'" icon="star-half-alt" />
                    <font-awesome-icon v-if="star==='empty'" :icon="['far', 'star']"/>
                  </span>
                  <b>{{item.rates.toFixed(1)}}</b>
                </div>
                <div class="area">
                  <b>地區：</b>{{item.area}}
                </div>
                <div class="categories">
                  <b>種類</b>
                  <div>
                    <span v-for="(cate, i) in objToArray(item.categories)"
                      :key="i">
                    {{cate}}
                    </span>
                  </div>
                </div>
                <div class="director" v-if="item.directors">
                  <b>導演：</b>
                  <div>
                    <span v-for="(d, i) in objToArray(item.directors)"
                      :key="i">
                    {{d}}
                    </span>
                  </div>
                </div>
                <div class="cast" v-if="objToArray(item.cast)">
                  <b>主演：</b>
                  <div>
                    <span v-for="(c, i) in objToArray(item.cast).slice(0,3)"
                      :key="i">
                    {{c}}
                    </span>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { rateStarWithEmpty } from '../helper';
  import { objToArray } from '../helper';
  import BannerSlide from '../components/BannerSlide';

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
        },
        directorData: []
      }
    },
    components: {
      BannerSlide,
    },
    computed: {
      filmsData() {
        const routeType = this.$route.name
        if(routeType === 'movies') {
          return this.$store.state.movies.sort((a,b) => {
            return b.rates - a.rates;
          })
        } else if (routeType === 'series') {
          return this.$store.state.series.sort((a,b) => {
            return b.rates - a.rates;
          })
        }
      },
      bannerData() {
        const routeType = this.$route.name
        if(routeType === 'movies') {
          return this.$store.getters.moviesBanner
        } else if (routeType === 'series') {
          return this.$store.getters.seriesBanner
        }
        return []
      },
    },
    methods: {
      rateStarWithEmpty(rates) {
        return rateStarWithEmpty(rates)
      },
      objToArray(obj) {
        // console.log(objToArray(obj),'obj')
        return objToArray(obj)
      },
      // bannerRWD() {
      //   const bannerWidth = this.$refs.bannerSlide.clientWidth;
      //   return bannerRWD(bannerWidth);
      // }
    }
  };
</script>

<style lang="scss">
  @import "../assets/scss/films.scss";
</style>