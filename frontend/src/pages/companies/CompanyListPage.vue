<template>
  <q-page padding>

    <CompanyList :companies="companies" />
  </q-page>
</template>

<script>
  import CompanyList from 'components/companies/Companylist'
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'CompanyListPage',
    mounted(){
      this.find();
    },
    components: { CompanyList },
    computed:{
      ...mapGetters({companies:'companies/list'})
    },
    methods:{
      ...mapActions({find:'companies/find'})
    },
    data () {
      return {

      }
    }
  }
</script>
