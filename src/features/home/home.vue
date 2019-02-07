<template lang="pug">
  v-container.o-home(
    grid-list
  )
    v-layout(
      justify-space-around
      row
      fill-height
    )
      v-sheet(
        color="indigo lighten-1"
        width="50%"
      )
        v-btn(
          large
          round
        ) Quick Workout
      v-sheet(
        color="cyan lighten-1"
        width="50%"
      )
        v-btn(
          large
          round
        )
</template>

<style lang="stylus">
#app
  .o-home
    height: 280px
</style>
