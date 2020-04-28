<template>
  <q-layout view="hHh Lpr fFf">
    <q-page-container class="cover">
      <transition>
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>

  export default {
     name: 'Unauthenticated',
    data () {
      return {

        leftDrawer: true
      }
    }
  }
</script>
<style scoped>
.cover {
  background-image: linear-gradient(
      to bottom,
      rgba(3, 22, 85, 0.8),
      rgba(50, 11, 100, 0.9)
      
    );
    
  background-size: cover;
  background-position: center center;
}
</style>