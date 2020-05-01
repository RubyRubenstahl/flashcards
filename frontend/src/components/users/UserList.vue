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
      switch-toggle-side
      group="users"
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
          <q-item-label>{{user.displayName}}</q-item-label>

          <q-item-label caption>{{user.email}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn
            dense
            flat
            round
            icon="fas fa-ellipsis-v"
            @click.stop
          >
            <q-menu>
              <UserActionList :user="user"></UserActionList>
            </q-menu>
          </q-btn>
        </q-item-section>
      </template>
      <q-card>
        <q-card-section>
          <UserForm :value="user" mode="edit"/>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
  import UserActionList from './UserActionList';
  import UserForm from './UserForm';

  export default {
    name: 'UserList',
    components: { UserActionList, UserForm},
    data () {
      return {}
    },
    props: {
      users: {
        type: Array,
        required: true
      }
    }
  }
</script>
