<template>
  <q-list style="min-width: 100px">
         <MenuItem title="Add User" icon="fas fa-plus" to="/app/settings/users/new"/>>
  </q-list>
</template>

<script>
import MenuItem from 'components/ui/MenuItem';
export default {
  name: 'UsersActionList',
  components: {MenuItem},
  data () {
    return {}
  }
}
</script>
