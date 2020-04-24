<template>
  <q-page padding>
    <h1 class="text-h4">New User</h1>
    <UserForm :value="new $FeathersVuex.api.User()" mode="new" @saved="$router.go(-1)" @cancel="$router.go(-1)"/>
  </q-page>
</template>

<script>
import UserForm from 'components/users/UserForm'
export default {
  name: 'NewUserPage',
  components: {UserForm},
  mounted(){
    this.user = new this.$FeathersVuex.api.User();
  },
  data(){
    return {
      user:null
    }
  },

}
</script>
