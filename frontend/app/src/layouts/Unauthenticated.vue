<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

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
  export default {
    // name: 'LayoutName',

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
      rgba(3, 27, 105, 0.752),
      rgba(3, 27, 105, 0.752),
      rgba(38, 4, 92, 0.89)
    ),
    url("/statics/login-background.jpg");
  background-size: cover;
  background-position: center center;
}
</style>