<template>
  <q-page padding>
      <UserForm mode="new" :value="user"/>
  </q-page>
</template>

<script>
import UserForm from 'components/users/UserForm'
export default {
  name: 'FirstRun',
  components: {UserForm},
  mounted(){
    const {User} = this.$FeathersVuex.api;
    this.user = new User({isAdmin: true, type: 'internal'});
  },
  data(){
    return {
      user: null,
      
    }
  }
  

}
</script>
