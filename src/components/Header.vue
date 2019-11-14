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
          <span class="mr-2">HOME</span>
        </router-link>
        <!-- <router-link
          to="/movies"
        >
          <span class="mr-2">Movies</span>
        </router-link> -->
      </div>
      <!-- <div class="tool-nav">
        <router-link to="/">Sign in</router-link>
      </div> -->
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @import "../assets/scss/header.scss";
</style>
