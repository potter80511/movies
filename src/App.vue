<template>
  <div>
    <Header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import "./assets/scss/theme.scss";
</style>
