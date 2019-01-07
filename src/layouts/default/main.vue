<template lang="pug">
  v-app.my-default-layout
    hello-world(msg="Welcome to Jurassic Park!")
    v-content(style="padding-top: 48px;")
      transition(name="slide" mode="out-in")
        router-view
</template>

<script>
import HelloWorld from '@/components/hello-world'

export default {
  name: 'DefaultLayout',

  components: {
    HelloWorld
  },

  methods: {

  }
}
</script>

<style lang="stylus">
</style>
