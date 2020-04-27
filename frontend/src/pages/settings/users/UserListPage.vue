<template>
  <q-page padding>

    <UserList :users="users" />
  </q-page>
</template>

<script>
  import UserList from 'components/users/UserList'
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'UserListPage',
    mounted(){
      this.find();
    },
    components: { UserList },
    computed:{
      ...mapGetters({users:'users/list'})
    },
    methods:{
      ...mapActions({find:'users/find'})
    },
    data () {
      return {

      }
    }
  }
</script>
