<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="cover">
      <q-page class="flex column">
        <Breadcrumbs style="padding-left:20vw; padding-top:10vh" />
        <div class="full-width flex flex-center">
          <router-view />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
  import Breadcrumbs from 'components/Breadcrumbs'
  export default {
    name: 'MenuLayout',
    components: {
      Breadcrumbs
    },
    data () {
      return {
      }
    }
  }
</script>
<style scoped>
.cover {
  background-image: linear-gradient(
      to bottom,
      rgba(3, 22, 85, 0.95),
      rgba(14, 11, 100, 0.85)
      
    ),
    url("/statics/menu-background.jpg");
  background-size: cover;
  background-position: center top;
}

</style>
