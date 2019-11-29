<template>
  <div id="films">
    <BannerSlide
      :bannerData="bannerData"
      :background="true"
    />
    <div class="film_list">
      <div class="container">
        <div class="tools">
          <div class="filter">
            <div class="conditions">
              <div class="label">
                <span>地區</span>
                <font-awesome-icon icon="angle-double-right" />
              </div>
              <div class="contents">
                <span v-for="filterArea in filterAreas" :key="filterArea.index">
                  <span :class="{'active': currentSelectedArea === filterArea.keyName}" @click="filterAreaMethod(filterArea.keyName)">{{ filterArea.keyName }}</span>
                </span>
              </div>
            </div>
            <div class="conditions">
              <div class="label">
                <span>種類</span>
                <font-awesome-icon icon="angle-double-right" />
              </div>
              <div class="contents">
                <span v-for="filterCate in filterCates" :key="filterCate.id">
                  <span :class="{'active': currentSelectedCategory === filterCate.key}" @click="filterCategory(filterCate.key)">{{ filterCate.keyName }}</span>
                </span>
              </div>
            </div>
            <div class="conditions">
              <div class="label">
                <span>年份</span>
                <font-awesome-icon icon="angle-double-right" />
              </div>
              <div class="contents">
                <span v-for="filterYear in filterYears" :key="filterYear.index">
                  <span :class="{'active': currentSelectedYear === filterYear}" @click="filterYearMethod(filterYear)">{{ filterYear }}</span>
                </span>
              </div>
            </div>
          </div>
          <div class="sort">
            <select v-model="sortBy">
              <option value="imdbRates">以IMDB評分排序</option>
              <option value="myRates">以我的評分排序</option>
            </select>
            <font-awesome-icon icon="chevron-down" />
          </div>
        </div>
        <div class="section-header">
          <h2 v-if="$route.name === 'movies'">電影列表<span>Movies</span></h2>
          <h2 v-else-if="$route.name === 'series'">影集列表<span>Series</span></h2>
        </div>
        <div class="row list_content" v-if="filmsData.length > 0">
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
                <div class="director" v-if="item.type === 'movies' && item.director">
                  <b>導演：</b>
                  <div>
                    <span>{{item.director}}</span>
                  </div>
                </div>
                <div class="writers" v-else-if="item.type === 'series' && item.writers">
                  <b>編劇：</b>
                  <div>
                    <span v-for="(w, i) in objToArray(item.writers).slice(0, 3)"
                      :key="i">
                    {{w}}
                    </span>
                    <span v-if="objToArray(item.writers).length > 3">...</span>
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
        <div class="row list_content" v-else>
          <p>沒有篩選結果</p>
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
        directorData: [],
        filterAreas: [
          {
            keyName: '全部',
            key: '00'
          },
          {
            keyName: '美國',
            key: '01'
          },
          {
            keyName: '英國',
          },
          {
            keyName: '韓國',
          },
          {
            keyName: '泰國',
          },
          {
            keyName: '日本',
          },
          {
            keyName: '印度',
          },
        ],
        filterCates: [
          {
            keyName: '全部',
            key: '00'
          },
          {
            keyName: '動作',
            key: '01'
          },
          {
            keyName: '犯罪',
            key: '02'
          },
          {
            keyName: '愛情',
            key: '03'
          },
          {
            keyName: '科幻',
            key: '04'
          },
          {
            keyName: '驚悚',
            key: '05'
          },
          {
            keyName: '恐怖',
            key: '06'
          },
          {
            keyName: '劇情',
            key: '07'
          },
          {
            keyName: '喜劇',
            key: '08'
          },
          {
            keyName: '家庭',
            key: '09'
          },
          {
            keyName: '戰爭',
            key: '10'
          },
          {
            keyName: '傳記',
            key: '11'
          },
          {
            keyName: '動畫',
            key: '12'
          },
          {
            keyName: '音樂',
            key: '13'
          },
          {
            keyName: '奇幻',
            key: '14'
          },
        ],
        filterYears: [
          '全部',
          2019,
          2018,
          2017,
          2016,
          2015,
          2014,
          2013,
          1994,
        ],
        currentSelectedArea: '全部',
        currentSelectedCategory: '00',
        currentSelectedYear: '全部',
        sortBy: 'imdbRates'
        // filmsData: []
      }
    },
    components: {
      BannerSlide,
    },
    computed: {
      filmsData() {
        const routeType = this.$route.name
        let data = []
        const sortBy = this.sortBy
        if(routeType === 'movies') {
          data = this.$store.state.movies.sort((a,b) => {
            return sortBy === 'imdbRates' ? b.rates - a.rates : b.my_rate - a.my_rate;
          })
        } else if (routeType === 'series') {
          data = this.$store.state.series.sort((a,b) => {
            return sortBy === 'imdbRates' ? b.rates - a.rates : b.my_rate - a.my_rate;
          })
        }

        const currentSelectedArea = this.currentSelectedArea;
        const currentSelectedCategory = this.currentSelectedCategory;
        const currentSelectedYear = this.currentSelectedYear;
    
        if(currentSelectedArea !== '全部' && currentSelectedCategory !== '00' && currentSelectedYear !== '全部' ) {
          const filteredData = data.filter(f => {
            return f.area === currentSelectedArea
          }).filter(c => {
            const categoriesKey = Object.keys(c.categories || {})
            return categoriesKey.includes(currentSelectedCategory)
          }).filter(y => {
            return y.year === currentSelectedYear
          })
          return filteredData
        } else if(currentSelectedArea === '全部' && currentSelectedCategory !== '00' && currentSelectedYear !== '全部') {
          const filteredData = data.filter(c => {
            const categoriesKey = Object.keys(c.categories || {})
            return categoriesKey.includes(currentSelectedCategory)
          }).filter(y => {
            return y.year === currentSelectedYear
          })
          return filteredData
        } else if (currentSelectedArea !== '全部' && currentSelectedCategory === '00' && currentSelectedYear !== '全部') {
          const filteredData = data.filter(f => {
            return f.area === currentSelectedArea
          }).filter(y => {
            return y.year === currentSelectedYear
          })
          return filteredData
        } else if (currentSelectedArea !== '全部' && currentSelectedCategory !== '00' && currentSelectedYear === '全部') {
          const filteredData = data.filter(f => {
            return f.area === currentSelectedArea
          }).filter(c => {
            const categoriesKey = Object.keys(c.categories || {})
            return categoriesKey.includes(currentSelectedCategory)
          })
          return filteredData
        } else if (currentSelectedArea !== '全部' && currentSelectedCategory === '00' && currentSelectedYear === '全部' ) {
          const filteredData = data.filter(f => {
            return f.area === currentSelectedArea
          })
          return filteredData
        } else if (currentSelectedArea === '全部' && currentSelectedCategory !== '00' && currentSelectedYear === '全部' ) {
          const filteredData = data.filter(c => {
            const categoriesKey = Object.keys(c.categories || {})
            return categoriesKey.includes(currentSelectedCategory)
          })
          return filteredData
        } else if (currentSelectedArea === '全部' && currentSelectedCategory === '00' && currentSelectedYear !== '全部' ) {
          const filteredData = data.filter(y => {
            return y.year === currentSelectedYear
          })
          return filteredData
        } else {
          return data
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
      filterAreaMethod(name) {
        this.currentSelectedArea = name
        // console.log(data)
      },
      filterCategory(key) {
        this.currentSelectedCategory = key
      },
      filterYearMethod(key) {
        this.currentSelectedYear = key
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
  @import "../assets/scss/filter.scss";
</style>