<template>
  <q-layout view="lHh Lpr lFf">
    <SillyAnimations />
     <q-header class="transparent ">
      <q-toolbar class="flex justify-end">
        <q-btn
          flat
          round
          dense
          icon="close"
          @click="$router.go(-1)" />
      </q-toolbar>
     </q-header>m
    <q-page-container class="cover ">
      <q-page class="flex content-center column text-center full-width" >
        <h1 class="text-h4" style="opacity:.5"><q-icon :name="$route.meta.icon"></q-icon> {{$route.name}}</h1>
        <div style="max-width:500px">
          <transition>
            <router-view />
          </transition>
          </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
  import SillyAnimations from 'components/SillyAnimations'
  export default {
    name: 'FormLayout',

    components: {
      SillyAnimations
    },

    data () {
      return {
     
      }
    }
  }
</script>
