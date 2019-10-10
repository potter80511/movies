<template>
  <v-app class="bg_color_none">
    <Header />
    <div class="content">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  body {
    background: #000;
  }
  img {
    width: 100%;
    height: auto;
  }
  .bg_color_none {
    background: none!important;
  }
  .swiper-container {
    
  }
  .swiper-button {
    background-image: none!important;
    width: 20px!important;
    height: 20px!important;
    border-color: #fff;
    border-style: solid;
    transform: rotate(45deg);
    &:focus {}
    &.swiper-button-prev {
      border-width: 0 0 3px 3px;
      left: 20px;
    }
    &.swiper-button-next {
      border-width: 3px 3px 0 0;
      right: 20px;
    }
  }
  .section-header {
    margin-bottom: 25px;
    h2 {
      color: #fff;
      font-size: 26px;
      border-bottom: 2px solid #333;
      padding-bottom: 15px;
    }
  }
  .swiper {
    background: #000;
  }
</style>
