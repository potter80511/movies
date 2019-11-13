import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    series: [],
    currentFilm: null,
  },
  mutations: { //更改狀態
    setLoadedMovies(state, payload) {
      state.movies = payload
    },
    setLoadedSeries(state, payload) {
      state.series = payload
    },
    setCurrentFilm(state, payload) {
      state.currentFilm = payload
    },
  },
  actions: {
    loadedMovies({commit}) {
      firebase.database().ref('movies').orderByChild('type').equalTo('movies').once('value')
        .then((data) => {
          const movies = []
          const obj = data.val()
          
          for (let key in obj) {
            movies.push({
              id: key,
              name: obj[key].name,
              brief: obj[key].brief,
              wallpaper: obj[key].wallpaper,
              rates: obj[key].rates,
              favorite: obj[key].favorite,
              my_rate: obj[key].my_rate,
            })
          }
          console.log(movies, 'store')
          commit('setLoadedMovies', movies)
        })
    },
    loadedSeries({commit}) {
      firebase.database().ref('movies').orderByChild('type').equalTo('series').once('value')
        .then((data) => {
          const series = []
          const obj = data.val()
          
          for (let key in obj) {
            series.push({
              id: key,
              name: obj[key].name,
              brief: obj[key].brief,
              wallpaper: obj[key].wallpaper,
              rates: obj[key].rates,
              favorite: obj[key].favorite,
              my_rate: obj[key].my_rate,
              index_banner: obj[key].index_banner,
              banner: obj[key].banner,
            })
          }
          console.log(series, 'store')
          commit('setLoadedSeries', series)
        })
    },
    loadedFilm({commit}, imdb_id) {
      firebase.database().ref('movies').orderByChild('imdb_id').equalTo(imdb_id).once('value')
        .then((data) => {
          const obj = data.val()
          const film_data = obj[Object.keys(obj)[0]]
          
          commit('setCurrentFilm', film_data)
        })
    },
  },
  getters: {
    filterFavoriteMovies(state) {
      const filterData = state.movies.filter((o) => {
        return o.favorite === true
      });
      return filterData;
    },
    filterFavoriteSeries(state) {
      const filterData = state.series.filter((o) => {
        return o.favorite === true
      });
      return filterData;
    },
    filterIndexBanner(state) {
      const filterData = state.series.filter((o) => {
        return o.index_banner === true
      });
      return filterData;
    },
  }
})
