import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Films from './views/Films.vue'
import FilmDetails from './views/FilmDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/film_details/:id',
      name: 'film details',
      component: FilmDetails
    },
    {
      path: '/movies',
      name: 'movies',
      component: Films
    },
    {
      path: '/series',
      name: 'series',
      component: Films
    }
  ]
})
