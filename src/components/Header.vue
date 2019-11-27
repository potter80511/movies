<template>
  <header id="header">
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
        <router-link
          to="/series"
        >
          Series
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
    mounted() {
      if(document.body.clientWidth > 991) {
        document.addEventListener('scroll', () => {
          if(window.pageYOffset > 0) {
            document.getElementById('header').classList.add("onScrolled");
          } else {
            document.getElementById('header').classList.remove("onScrolled");
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/header.scss";
</style>
