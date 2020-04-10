<template>

  <div style="width:800px">
    <q-toolbar class="glossy q-mt-lg">
      <q-space></q-space>
        <q-btn
          to="/app/todo/new"
          label="New"
        />

    </q-toolbar>

    <q-splitter
      :value="200"
      unit="px"
       style="height: 400px"
    >
      <template v-slot:before>
        <div class="flex column">
        
        <div class="text-subtitle1">
          <q-icon name="fas fa-user" class="q-mr-md"></q-icon>
          Users
        </div>
        <q-separator/>
        <UserSelector v-model="filters.selectedUsers" />
        </div>
      </template>
      <template v-slot:after>
        <div>
        Hello
        </div>
      </template>
    </q-splitter>

  </div>

</template>
<script>
  import { mapGetters } from 'vuex'
  import UserSelector from './UserSelector';

  export default {
    name: 'Todos',
    components: { UserSelector },
    data () {
      return {
        filters: {
          selectedUsers: []
        }
      }
    },
    computed: {
      query () {
        const query = {};
        if (this.filters.selectedUsers.length > 0) {
          query.userId = { $in: this.filters.selectedUsers }
        }
        return query;
      }
    }
  }
</script>

