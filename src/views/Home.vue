<template>
  <div class="home">
    <FlashCard />
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
