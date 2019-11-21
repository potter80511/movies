<template>
  <div>
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import "./assets/scss/theme.scss";
</style>
