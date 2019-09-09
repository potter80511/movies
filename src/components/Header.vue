<template>
  <v-app-bar app
    color="transparent"
    flat>
    <v-toolbar-title class="headline text-uppercase"
      color="#fff">
      <span>Vuetify</span>
      <span class="font-weight-light">MATERIAL DESIGN</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="menu">
      <div class="main_nav">
        <v-btn
          to="/"
        >
          <span class="mr-2">HOME</span>
        </v-btn>
        <v-btn
          to="/movies"
        >
          <span class="mr-2">Movies</span>
        </v-btn>
      </div>
      <div class="tool-nav">
        <v-btn>Sign in</v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<style lang="scss">
  header {
    .v-toolbar__content {
      .v-toolbar__title {
        color: #fff;
        font-size: 28px!important;
      }
      .menu {
        display: flex;
        a.v-btn, button.v-btn {
          font-size: 16px;
          background: none!important;
          color: #9fb6bf;
          text-transform: capitalize;
          box-shadow: none;
          border-radius: 0!important;
          margin-left: 20px;
          &.v-btn--active, &:hover {
            color: #fff;
            text-shadow: 0 0 8px #fff;
            &:before {
              background: none;
            }
          }
        }
        .tool-nav {
          button.v-btn {
          }
        }
      }
    }
  }
</style>
