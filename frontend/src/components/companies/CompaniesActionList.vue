<template>
  <q-list style="min-width: 100px">
         <MenuItem title="Add Companies" icon="fas fa-plus" to="/app/companies/new"/>>
  </q-list>
</template>

<script>
import MenuItem from 'components/ui/MenuItem';
export default {
  name: 'CompaniesActionList',
  components: {MenuItem},
  data () {
    return {}
  }
}
</script>
