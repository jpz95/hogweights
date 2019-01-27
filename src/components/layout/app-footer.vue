<template lang="pug">
  v-footer.a-footer(:class="{ 'my-appfooter--sidebar-open': sidebarVisibility }")
    .grey--text © 2018 Sole Mate
</template>

<script>
export default {
  name: 'AppFooter',

  computed: {
    sidebarVisibility () {
      return this.$store.state.common.sidebar.visible && this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style lang="stylus">
.a-footer
  justify-content: center

  &--sidebar-open
    padding-left: 300px

</style>
