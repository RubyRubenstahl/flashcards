<template>
  <div id="q-app">
     <q-badge v-if="process.env.DEV" class="fixed-top-right z-top q-ma-sm" color="red" text-color="white" label="DEV" />
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

export default {
  name: 'App',
    created () {
    this.$q.dark.set(true)
  }
}
</script>
