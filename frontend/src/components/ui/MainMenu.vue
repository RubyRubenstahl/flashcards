<template>
  <q-list>
    <MenuGroup title="Settings" icon="fas fa-cog">
      <q-list class="q-ml-2">
        <MenuItem  title="Users" icon = "fas fa-users" to="/app/settings/users"/>
      </q-list>
    </MenuGroup>
  </q-list>
</template>

<script>
import MenuItem from './MenuItem';
import MenuGroup from './MenuGroup';
export default {

  name: 'MainMenu',
  components: {MenuItem, MenuGroup},
  data () {
    return {}
  }
}
</script>
