import Vue from 'vue'
import store from './store'
import { sync } from 'vuex-router-sync'
import { http, router } from './http'
import auth from './auth'
import Vuetify from 'vuetify'
import App from './app'
import AppToolbar from '@/components/layout/app-bar'
import AppFooter from '@/components/layout/app-footer'

Vue.config.productionTip = false

// Polyfills
/* global.URLSearchParams = URLSearchParams */

// Sync router to store, as `store.state.route`.
sync(store, router)

// Http and Auth plugins
Vue.use(http)
Vue.use(auth)

// Vuetify
Vue.use(Vuetify, {
  theme: {
    primary: '#21CE99',
    secondary: '#D81B60',
    accent: '#805441'
  }
})

// Styles
require('./styles/scss/main.scss')
require('./styles/stylus/main.styl')

// Global Components
Vue.component('AppToolbar', AppToolbar)
Vue.component('AppFooter', AppFooter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
