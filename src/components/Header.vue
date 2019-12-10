<template>
  <header id="header">
    <div class="h_wrap">
      <div class="logo">
        <router-link to="/">
          <span>My</span>
          <strong>IMDB</strong>
        </router-link>
      </div>
      <div class="menu">
        <div class="main_nav desktop">
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
        <font-awesome-icon icon="bars" ref="menuBar" />
      </div>
    </div>
    <div class="mobile" ref="mobile">
      <div class="mobile_block" ref="mobile_block"></div>
      <div class="mobile_menu">
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
      </div>
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
      let mobileOn = false;
      this.$refs.menuBar.addEventListener('click', () => {
        mobileOn = !mobileOn;
        switch(mobileOn) {
          case true:
            this.$refs.mobile.classList.add("draw_in");
            break;
          case false:
            this.$refs.mobile.classList.remove("draw_in");
            break;
        }
      });
      this.$refs.mobile_block.addEventListener('click', () => {
        this.$refs.mobile.classList.remove("draw_in");
        mobileOn = false;
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/header.scss";
</style>
