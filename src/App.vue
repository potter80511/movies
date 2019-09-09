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
  .bg_color_none {
    background: none!important;
  }
  .swiper {
    background: #000;
  }
</style>
