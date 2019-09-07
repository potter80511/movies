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
  </v-app-bar>
</template>
