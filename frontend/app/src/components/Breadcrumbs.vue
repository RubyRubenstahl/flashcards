<template>
  <q-breadcrumbs style="opacity:0.5;font-size:4vmin" active-color="#F00" gutter="md" separator=">">
        <q-breadcrumbs-el 
          v-for="route in routes" 
          :key="route.fullPath" 
          :label="route.name" 
          :to="route.fullPath" 
          :icon="route.meta.icon" 
          
          />
  </q-breadcrumbs>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  mounted(){
    console.log(this.$router.resolve('/app/tv/settings'));
  },
  data () {
    return {}
  },
  computed:{
    routes(){
      return this.$route.fullPath
      .split('/')
      .slice(1)
      .map((pathName, i, routes)=>{
        const path= '/' +routes.slice(0,i+1).join('/');
        const route = (this.$router.resolve(path)).resolved;
        return route;
      })
      
     
    }
  }
}
</script>
