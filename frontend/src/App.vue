<template>
  <div id="q-app">
   
    <q-badge
      v-if="!isProduction"
      class="fixed-top-right z-top q-ma-sm"
      color="red"
      text-color="white"
      :label="buildType"
    />
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
    },
    computed:{
      isProduction(){
        console.log(process.env.buildType)
        return process.env.buildType === 'production'
      },
      buildType(){
        return process.env.buildType;
      }
    }
  }
</script>
