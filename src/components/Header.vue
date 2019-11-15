<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <span>My</span>
        <strong>IMDB</strong>
      </router-link>
    </div>
    <div class="menu">
      <div class="main_nav">
        <router-link
          to="/"
        >
          HOME
        </router-link>
        <router-link
          to="/movies"
        >
          Movies
        </router-link>
      </div>
      <!-- <div class="tool-nav">
        <router-link to="/">Sign in</router-link>
      </div> -->
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      // isActive(route) {
      //   console.log(route)
      //   if (route === this.$route.path) {
      //     return true
      //   }
      //   return false
      // }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/header.scss";
</style>
