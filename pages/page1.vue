<template>
  <div>
    <p class="text-xs-center display-3 font-weight-medium">Page1</p>
    <Counter />
  </div>
</template>
<script>
import Counter from "~/components/ui/CounterContainer.vue";

export default{
  components:{
    Counter
  }
}
</script>