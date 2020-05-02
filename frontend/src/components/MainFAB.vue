<template>
  <q-fab
    color="secondary"
    icon="fas fa-plus"
    direction="down"
    class="main-fab"
  >
    <q-fab-action
      color="primary"
      to="/app/companies/new"
      label-position="left"
      external-label
      icon="fas fa-building"
      label="New Company"
    />
    <q-fab-action
      color="primary"
      to="/app/settings/users/new"
      label-position="left"
      external-label
      icon="fas fa-user"
      label="New user or contact"
    />
    <q-fab-action
      color="primary"
      to="/app/projects/new"
      label-position="left"
      external-label
      icon="fas fa-clipboard"
      label="New Project"
    />
    <q-fab-action
      color="primary"
      to="/app/call_log/new"
      label-position="left"
      external-label
      icon="fas fa-phone"
      label="Call log"
    />
  </q-fab>
</template>

<script>
  export default {
    // name: 'ComponentName',
    data () {
      return {}
    }
  }
</script>
<style scoped>
.main-fab {
  position: fixed;
  right: 10px;
  bottom: 50px;
}
</style>