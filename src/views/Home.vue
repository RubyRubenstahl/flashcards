<template>
  <div class="home">
    <FlashCard 
      :inputLines="[{type: 'value', value: 4 }, {type: 'input', name: 'addend', expected:8 }]" :answerLine="{type: 'value', value: 12 }"
      />
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
  height: 60vh;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
