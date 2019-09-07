import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    setLoadedMovies(state, payload) {
      state.movies = payload
    }
  },
  actions: {
    loadedMovies({commit}) {
      firebase.database().ref('movies').once('value')
        .then((data) => {
          const movies = []
          const obj = data.val()
          
          for (let key in obj) {
            movies.push({
              id: key,
              name: obj[key].name,
              brief: obj[key].brief
            })
          }
          commit('setLoadedMovies', movies)
        })
    }
  }
})
