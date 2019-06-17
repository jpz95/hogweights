<template>
  <v-layout row wrap>
    <v-flex class="log__title" xs6>
      <v-text-field :value="workoutTitle" class="d-inline-block" box></v-text-field>
      <date-picker is-inline-block></date-picker>
    </v-flex>
  </v-layout>
</template>

<script>
import DatePicker from '@/components/workout-log/date-picker'

export default {
  components: {
    DatePicker
  },

  data: () => ({
    workoutTitle: 'Workout 1'
  })
}
</script>

<style lang="stylus">
#app
  .log
    &__title
      .v-text-field
        padding: 0
        margin: 0
</style>
