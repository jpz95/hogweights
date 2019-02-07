<template lang="pug">
  v-app.o-defaultLayout
    app-bar
    app-sidebar
    v-content(style="padding-top: 48px;")
      transition(name="slide" mode="out-in")
        router-view
    app-footer
    app-snackbar
</template>

<script>
import AppBar from '@/components/layout/app-bar'
import AppSidebar from '@/components/layout/app-sidebar'
import AppFooter from '@/components/layout/app-footer'
import AppSnackbar from '@/components/layout/app-snackbar'

export default {
  name: 'DefaultLayout',

  components: {
    AppBar,
    AppSidebar,
    AppFooter,
    AppSnackbar
  },

  methods: {

  }
}
</script>

<style lang="stylus">
</style>
