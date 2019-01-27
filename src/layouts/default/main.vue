<template lang="pug">
  v-app.o-defaultLayout
    app-bar
    app-sidebar
    hello-world(msg="Welcome to Jurassic Park!")
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
import AppSnackBar from '@/components/layout/app-snackbar'
import HelloWorld from '@/components/hello-world'

export default {
  name: 'DefaultLayout',

  components: {
    AppBar,
    AppSidebar,
    AppFooter,
    AppSnackBar,
    HelloWorld
  },

  methods: {

  }
}
</script>

<style lang="stylus">
</style>
