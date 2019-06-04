<template>
  <div>
    <div class="text-xs-center">
      <v-btn large color="yellow accent-1" @click="execIncrement">Count Up</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    execIncrement(){
      this.$store.commit('increment')
    }
  }
}
</script>
