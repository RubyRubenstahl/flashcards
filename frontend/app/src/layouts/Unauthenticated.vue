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
      rgba(7, 49, 100, 0.552),
      rgba(20, 40, 80, 0.897)
    ),
    url("/statics/login-background.jpg");
  background-size: cover;
}
</style>