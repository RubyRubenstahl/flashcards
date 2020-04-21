<template>
  <q-list>
    <q-item v-if="!users">
      <q-item-section>
        No Users Found:(
      </q-item-section>
    </q-item>

    <q-expansion-item
      v-else
      v-for="user in users"
      :key="user._id"
    >
      <template v-slot:header>
        <q-item-section avatar>
          <q-avatar
            icon="fas fa-user"
            color="primary"
            text-color="white"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{user.username}}</q-item-label>
          <q-item-label caption>{{user.firstName}} {{user.lastname}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>{{user.email}}</q-item-label>
        </q-item-section>
      </template>
      <q-card>
        <q-card-section class="bg-white">
          
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
  export default {
    name: 'UserList',
    data () {
      return {}
    },
    props: {
      users: {
        type: [Object],
        required: true
      }
    }
  }
</script>
