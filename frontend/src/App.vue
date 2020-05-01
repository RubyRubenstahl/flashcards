<template>
  <div id="q-app">
   
    <EnvironmentWatermark/>
    <router-view />
  </div>
</template>

<script>
  import Vue from 'vue'
  import Fragment from 'vue-fragment'
  import EnvironmentWatermark from 'components/EnvironmentWatermark'
  Vue.use(Fragment.Plugin)

  export default {
    name: 'App',
    components:{EnvironmentWatermark},
    created () {
      // this.$q.dark.set(true)
    },

  }
</script>
