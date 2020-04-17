<template>

  <div style="width:800px">
    <q-toolbar class="glossy q-mt-lg q-mb-md" style="background-color:#00000022">
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
            <q-icon
              name="fas fa-user"
              class="q-mr-md"
            ></q-icon>
            Users
          </div>
          <q-separator />
          <UserSelector v-model="filters.selectedUsers" />
        </div>
      </template>
      <template v-slot:after>
        <FeathersVuexFind
          service="todos"
          :query="query"
          watch="query"
        >
          <section
            class="admin-categories"
            slot-scope="{ items: todos }"
          >
            <q-list>
              <q-item
                v-for="todo in todos"
                :key="todo._id"
                clickable
                :to="`/app/todo/edit/${todo._id}`"
              >
                <q-item-section>
                  <q-item-label>{{todo.task}}</q-item-label>
                  <q-item-label
                    caption
                    lines="2"
                  >{{todo.description}}</q-item-label>
                </q-item-section>

                <q-item-section
                  side
                  top
                >
                  <q-item-label caption><q-icon
                    name="fas fa-user"
                    size="xs"
                  /> {{todo.username}}</q-item-label>
                  
                </q-item-section>
              </q-item>
            </q-list>
          </section>
        </FeathersVuexFind>
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
          selectedUsers: [],
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

