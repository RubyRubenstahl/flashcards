<template>
  <q-layout view="lHh Lpr lFf">
     <q-header class="transparent ">
      <q-toolbar class="flex justify-end">
        <q-btn
          flat
          round
          dense
          icon="close"
          @click="$router.go(-1)" />
      </q-toolbar>
     </q-header>
    <q-page-container class="cover ">
      <q-page class="flex content-center column text-center full-width" >
        <h1 class="text-h4" style="opacity:.5"><q-icon :name="$route.meta.icon"></q-icon> {{$route.name}}</h1>
        <div style="width:500px">
          <transition>
            <router-view />
          </transition>
          </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
  export default {
    name: 'FormLayout',


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
