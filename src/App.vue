<template>
  <div>
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
    <BackToTop />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    BackToTop,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import "./assets/scss/theme.scss";
</style>
