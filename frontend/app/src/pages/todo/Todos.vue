<template>
    <FeathersVuexFind service="users" :query="{}">
    <section class="admin-categories" slot-scope="{ items: users }">
      <q-checkbox v-for="user in users" :key="user._id" v-model="selectedUsers">{{user.username}}</q-checkbox>
    </section>
  </FeathersVuexFind>
</template>
<script>

export default {
  name: 'Todos',
  data(){
    return {
      selectedUsers:[]
    }
  }
}
</script>

