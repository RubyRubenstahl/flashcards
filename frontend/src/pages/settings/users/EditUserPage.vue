<template>
  <q-page padding>
    <h1 class="text-h4">Edit User</h1>
    <UserForm v-model="user" mode="new" @saved="$router.go(-1)" @cancel="$router.go(-1)"/>
  </q-page>
</template>

<script>
import UserForm from 'components/users/UserForm'
export default {
  name: 'NewUserPage',
  components: {UserForm},
  mounted(){
  },
  data(){
    return {
    }
  },
  watch:{

  }

}
</script>
