<template>
  <div class="home">
    <FlashCard :inputLines="[{type: 'value', value: 4 }, {type: 'value', value: '8', prefix:'+'}]"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import FlashCard from '@/components/FlashCard.vue'

  export default {
    name: 'Home',
    components: {
      FlashCard
    }
  }
</script>
<style scoped>
.home {
  width: 100vw ;
  height: 90vh;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1in;
}
</style>
