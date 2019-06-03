<template>
  <div>
    <p class="text-xs-center display-3 font-weight-medium">Page2</p>
    <div class="text-xs-center">
      <v-btn large color="yellow accent-1" @click="execIncrement_a">Count Up</v-btn>
    </div>
    <v-container grid-list-xl>
      <v-layout row justify-center>
        <v-flex xs3>
          <v-card dark color="primary">
            <v-card-text>Nomal {{ nomal_a }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs3>
          <v-card color="primary">
            <v-card-text>PlusOne {{ plusOne_a }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed:{
    nomal_a(){
      return this.$store.state.counter
    },
    plusOne_a(){
      return this.$store.getters.counterPlusOne
    }
  },
  methods:{
    execIncrement_a(){
      this.$store.commit('increment')
    }
  }
}
</script>
>