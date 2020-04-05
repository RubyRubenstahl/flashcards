<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->
    <SillyAnimations/>

    <q-page-container class="cover">
      <!-- This is where pages get injected -->
      <transition

      >
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
<style >
.cover {
  background-image: linear-gradient(
      to bottom,
      rgba(3, 22, 85, 0.8),
      rgba(14, 11, 100, 0.75)
      
    ),
    url("/statics/login-background.jpg");
  background-size: cover;
  background-position: center center;
}
</style>