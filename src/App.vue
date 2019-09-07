<template>
  <v-app>
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

  .swiper {
    background: #000;
  }
</style>
