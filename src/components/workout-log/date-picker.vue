<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="date"
    lazy
    transition="scale-transition"
    offset-y
    min-width="120px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        readonly
        box
        :class="{ 'd-inline-block': isInlineBlock }"
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
</template>

<script>
export default {
  name: 'DatePicker',

  props: {
    isInlineBlock: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false
  })
}
</script>
