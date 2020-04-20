<template>
  <q-layout view="hHh Lpr fFf">
    <SillyAnimations/>
    <q-page-container class="cover">
      <transition>
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import SillyAnimations from 'components/SillyAnimations'

  export default {
     name: 'Unauthenticated',
    components:{SillyAnimations},
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
      rgba(14, 11, 100, 0.75)
      
    );
    
  background-size: cover;
  background-position: center center;
}
</style>