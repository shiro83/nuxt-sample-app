<template>
  <div>
    <v-container grid-list-xl>
      <v-layout row justify-center>
        <v-flex xs3>
          <v-card dark color="primary">
            <v-card-text>Nomal {{counter}}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs3>
          <v-card color="primary">
            <v-card-text>PlusOne {{counterPlusOne}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapState(['counter']),
    ...mapGetters(['counterPlusOne'])



  //同じ意味
  //  nomal(){
  //  return this.$store.state.counter
  //},
  //plusOne(){
  //  return this.$store.getters.counterPlusOne
  //}
  }
}
</script>
