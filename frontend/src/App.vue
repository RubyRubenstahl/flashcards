<template>
  <div id="q-app">
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
