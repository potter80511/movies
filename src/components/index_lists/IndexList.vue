<template>
  <div :id="blockId" :class="'lists ' + blockClass">
    <div class="container">
      <div class="section-header">
        <h2>{{sectionTitle}}</h2>
      </div>
      <swiper 
        :options="swiperOpitons"
        v-if="filmsData.length > 0"
      >
        <swiper-slide
          v-for="(item, i) in filmsData"
          :key="i">
          <IndexListSwiperSlide
            :imdbId="item.imdb_id"
            :wallpaper="item.wallpaper"
            :rates="item.rates"
            :name="item.tw_name"
            :brief="item.brief"
            :id="item.id"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button" slot="button-next"></div>
  </div>
</template>

<script>
  import IndexListSwiperSlide from './IndexListSwiperSlide';

  export default {
    props: {
      blockId: {
        type: String,
        default: '',
      },
      blockClass: {
        type: String,
        default: '',
      },
      sectionTitle: {
        type: String,
        default: '',
        required: true
      },
      filmsData: {
        type: Array,
        default: [],
        required: true
      },
    },
    components: {
      IndexListSwiperSlide
    },
    data() {
      return {
        swiperOpitons: {
          slidesPerView: 5,
          spaceBetween: 30,
          speed: 800,
          loop: true,
          // autoplay: {
          //   delay: 4000,
          //   disableOnInteraction: false,
          // },
          breakpoints: {
            1199: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
          },
          navigation: {
            nextEl: '#' + this.blockId + ' .swiper-button-next',
            prevEl: '#' + this.blockId + ' .swiper-button-prev',
          }
        },
      }
    }
  }
</script>

<style lang="scss">

</style>