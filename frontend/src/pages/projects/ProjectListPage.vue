<template>
  <q-page padding>

    <ProjectList :projects="projects" />
  </q-page>
</template>

<script>
  import ProjectList from 'components/projects/ProjectList'
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'ProjectListPage',
    mounted(){
      this.find();
    },
    components: { ProjectList },
    computed:{
      ...mapGetters({projects:'projects/list'})
    },
    methods:{
      ...mapActions({find:'projects/find'})
    },
    data () {
      return {

      }
    }
  }
</script>
