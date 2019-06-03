<template>
  <div>
    <CounterButton />
    <CounterView />
  </div>
</template>

<script>
import CounterButton from "~/components/ui/CounterButton.vue";
import CounterView from "~/components/ui/CounterView.vue";

export default{
  components:{
    CounterButton,
    CounterView
  }
}
</script>
