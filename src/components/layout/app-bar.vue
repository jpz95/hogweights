<template lang="pug">
  v-toolbar(
    :color="$vuetify.breakpoint.smAndDown ? 'primary' : 'default'"
    :dark="$vuetify.breakpoint.smAndDown"
    app
    dense
    fixed
    flat
  )
    v-toolbar-side-icon(v-show="!isBackButtonEnabled" @click.stop="toggleSidebar()")
    v-btn.a-bar__button(icon v-show="isBackButtonEnabled" @click.stop="$router.back()")
      v-icon arrow_backs
    v-toolbar-title.a-bar__defaultTitle(v-if="!$slots.title") {{ $store.state.common.title }}
    v-toolbar-title.a-bar__title(v-if="$slots.title && (!$slots.smallTitle || $vuetify.breakpoint.mdAndUp)")
      slot(name="title")
    v-toolbar-title.a-bar__smallTitle(v-if="$slots.smallTitle && $vuetify.breakpoint.smAndDown")
      slot(name="smallTitle")
    v-spacer
    .a-bar__icons(v-if="!$slots.smallIcons || $vuetify.breakpoint.mdAndUp")
      slot(name="icons")
    .a-bar__smallIcons(v-if="$slots.smallIcons && $vuetify.breakpoint.smAndDown")
      slot(name="smallIcons")
</template>

<script>
export default {
  name: 'AppBar',

  props: {
    isBackButtonEnabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    toggleSidebar () {
      this.$store.dispatch('common/updateSidebar', { visible: !this.$store.state.common.sidebar.visible })
    }
  }
}
</script>

<style lang="stylus">
#app
  .a-bar
    .toolbar__title

    &__icons
      margin-right: 8px

    &__small-icons
      white-space: nowrap
      margin-right: 5px
      margin-left: 8px

    .btn
      margin: 0

    .btn--flat
      min-width: 40px
</style>
