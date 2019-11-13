<template>
  <v-app class="bg_color_none">
    <Header />
    <div class="content">
      <router-view />
    </div>
  </v-app>
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
