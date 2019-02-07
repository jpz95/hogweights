<template lang="pug">
  v-navigation-drawer.o-sidebar(
    v-model="isActive"
    fixed
    :mobile-break-point="1904"
    app
    touchless
    dark
  )
    v-layout(justify-center wrap)
      // img.a-sidebar__backdrop(src='~/@/assets/images/backdrop.jpg' alt='Vue Pizza')

    v-divider

    v-avatar.a-sidebar__avatar(:size="70")

    v-list(dark)
      v-list-group(prepend-icon='person')
        v-list-tile(slot="activator" ripple)
          v-list-tile-content
            v-list-tile-title {{ $store.state.auth.user.name }}
        v-list-tile(ripple :to="{ name: 'home' }")
          v-list-tile-action
            v-icon account_box
          v-list-tile-content
            v-list-tile-title Account
        v-list-tile(ripple :to="{ name: 'home' }")
          v-list-tile-action
            v-icon settings
          v-list-tile-content
            v-list-tile-title Settings

    v-divider
    v-list(dark)
      v-list-tile(ripple :to="{ name: 'home' }")
        v-list-tile-action
          v-icon library_books
        v-list-tile-content
          v-list-tile-title Tutorial

      v-list-tile(ripple :to="{ name: 'home' }")
        v-list-tile-action
          v-icon dashboard
        v-list-tile-content
          v-list-tile-title Dashboard

      v-list-group(prepend-icon='more_horiz')
        v-list-tile(slot="activator" ripple)
          v-list-tile-content
            v-list-tile-title More
        v-list-tile(ripple :to="{ name: 'home' }")
          v-list-tile-content
            v-list-tile-title More Here
</template>

<script>
export default {
  name: 'AppSidebar',

  computed: {
    isActive: {
      get () {
        return this.$store.state.common.sidebar.visible
      },
      set (val) {
        this.$store.dispatch('common/updateSidebar', { visible: val })
      }
    }
  },

  methods: {}
}
</script>

<style lang="stylus">
  .o-sidebar
    z-index: 8

  .a-sidebar
    &__logo
      padding-right: 10px
      padding-top: 14px
      padding-bottom: 14px
      height: 60px

    &__avatar
      margin-top: 15px
      margin-left: 15px
</style>
