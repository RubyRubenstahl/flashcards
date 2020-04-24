<template>
  <q-page padding>
    <h1 class="text-h4">New Company</h1>
    <CompanyForm :value="this.company" mode="new" @saved="$router.go(-1)" @cancel="$router.go(-1)"/>
  </q-page>
</template>

<script>
import CompanyForm from 'components/companies/CompanyForm'
export default {
  name: 'NewCompanyPage',
  components: {CompanyForm},
  mounted(){
    this.company = new this.$FeathersVuex.api.Company();
  },
  data(){
    return {
      company:null
    }
  },

}
</script>
