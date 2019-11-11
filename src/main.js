import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import vueSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import { initializeApp, auth } from 'firebase';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
  faStar as farStar,
} from '@fortawesome/free-regular-svg-icons';
import { 
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faStar,
  farStar,
  faStarHalfAlt,
)

Vue.use(vueSwiper);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    initializeApp({
      apiKey: 'AIzaSyDitZDXRiRvRKcG8HoUzD9x7bX2t27FOME',
      authDomain: 'movies-a4f0a.firebaseapp.com',
      databaseURL: 'https://movies-a4f0a.firebaseio.com',
      projectId: 'movies-a4f0a',
      storageBucket: 'movies-a4f0a.appspot.com',
    });
    this.$store.dispatch('loadedMovies')
    this.$store.dispatch('loadedSeries')
  }
}).$mount('#app')
