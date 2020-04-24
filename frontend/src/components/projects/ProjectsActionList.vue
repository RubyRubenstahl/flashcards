<template>
  <q-list style="min-width: 100px">
         <MenuItem title="Add Projects" icon="fas fa-plus" to="/app/projects/new"/>>
  </q-list>
</template>

<script>
import MenuItem from 'components/ui/MenuItem';
export default {
  name: 'ProjectsActionList',
  components: {MenuItem},
  data () {
    return {}
  }
}
</script>
