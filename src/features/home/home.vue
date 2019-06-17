<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Picker in menu"
            prepend-icon="event"
            readonly
            v-on="on"
          />
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer />
          <v-btn flat color="primary" @click="menu = false">
            Cancel
          </v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false
  })
}
</script>

<style lang="stylus">
#app
  .o-home
    height: 280px
</style>
