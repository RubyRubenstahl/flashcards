<template>
  <q-page padding>
    <FeathersVuexFind
      service="users"
      :query="{}"
      watch="query"
    >
      <section
        class="admin-categories"
        slot-scope="{ items: users }"
      >
        <UserList :users="users" />
      </section>
    </FeathersVuexFind>
  </q-page>
</template>

<script>
  import UserList from 'components/users/Userlist'
  export default {
    name: 'UserListPage',
    components: { UserList }
  }
</script>
