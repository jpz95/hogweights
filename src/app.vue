<template>
  <div id="app">
    <component :is="component">
      <slot />
    </component>
  </div>
</template>

<script>
import PublicLayout from '@/layouts/public/main.vue'
import DefaultLayout from '@/layouts/default/main.vue'

export default {
  name: 'App',

  components: {
    PublicLayout,
    DefaultLayout
  },

  computed: {
    component () {
      return this.$store.state.common.layout
    }
  },

  mounted () {
    // Update page title.
    this.$store.watch(
      // Watch for 'title' updates
      state => {
        return state.common.title
      },
      // Callback on change
      title => {
        document.title = title
      },
      // Additional ptions
      {
        // Watch for nested value changes
        deep: true
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
