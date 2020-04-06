<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header class="transparent ">
      <q-toolbar class="flex justify-end">
        <q-btn
          flat
          round
          dense
          icon="fas fa-cog"
          :to="`/app/tv/edit/${$route.params.id}`"
        />
        <q-btn
          flat
          round
          dense
          icon="close"
          @click="$router.go(-1)" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
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
