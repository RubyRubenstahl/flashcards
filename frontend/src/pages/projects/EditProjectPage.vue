<template>
  <q-page padding>
    <h1 class="text-h4">New Project</h1>
    <ProjectForm :value="new $FeathersVuex.api.Project()" mode="new" @saved="$router.go(-1)" @cancel="$router.go(-1)"/>
  </q-page>
</template>

<script>
import ProjectForm from 'components/projects/ProjectForm'
export default {
  name: 'NewProjectPage',
  components: {ProjectForm},
  mounted(){
    this.project = new this.$FeathersVuex.api.Project();
    //dsalfdfsa
  },
  data(){
    return {
      project:null
    }
  },

}
</script>
