<template>
  <FeathersVuexFormWrapper :item="todo" watch  v-if="todo">
    <template v-slot="{ clone, save, reset }">
  <q-form
    @submit="save().then(()=>$router.go(-1))"
    v-if="todo"
  >
    <div class="q-gutter-lg flex column full-width">
      <q-input
        autofocus
        label="Task"
        v-model="clone.task"
        class="full-width"
        filled
      >
        <template v-slot:prepend>
          <q-icon name="fas fa-clipboard" />
        </template>
      </q-input>

      <q-input
        label="Description"
        v-model="clone.description"
        class="full-width"
        type="textarea"
        filled
      />
      <q-checkbox
        label="Complete"
        v-model="clone.completed"
        class="full-width"
        filled
      />

      <q-select
        v-model="clone.userId"
        :options="users"
        option-label="username"
        option-value="_id"
        emit-value
        map-options
        filled
        class="full-width"
        label="User"
      >

        <template v-slot:prepend>
          <q-icon name="fas fa-user" />
        </template>

      </q-select>

      <q-btn-toggle
        class="full-width"
        v-model="clone.repeat.mode"
        spread
        rounded
        unelevated
        glossy
        :options="[
          {label: 'Once', value: 'once'},
          {label: 'Weekly', value: 'weekly'},
        ]"
      />

      <q-btn-group class="row full-width">
        <q-btn-toggle
          glossy
          v-model="clone.due.mode"
          toggle-color="primary"
          :options="[
          {label: 'On', value: 'on'},
          {label: 'By', value: 'by'},
        ]"
        />
        <q-separator
          vertical
          inset
        />
        <q-select
          v-model="clone.due.value"
          class="col"
          glossy
          v-if="clone.repeat.mode==='weekly' && clone.due.mode==='on'"
          filled
          :options="Object.freeze([
          {label: 'Sun', value: 0},
          {label: 'Mon', value: 1},
          {label: 'Tue', value: 2},
          {label: 'Wed', value: 3},
          {label: 'Thur', value: 4},
          {label: 'Fri', value: 5},
          {label: 'Sat', value: 6},
        ])"
          multiple
          emit-value
          map-options
        >
          <template v-slot:option="scope">
            <q-item
              v-bind="scope.itemProps"
              v-on="scope.itemEvents"
            >
              <q-item-section>
                <q-item-label v-html="scope.opt.label"></q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-toggle
                  v-model="clone.due.value"
                  :val="scope.opt.value"
                />
              </q-item-section>
            </q-item>
          </template>
        </q-select>

        <q-select
          class="col"
          v-model="clone.due.value"
          v-if="clone.repeat.mode==='weekly' && clone.due.mode==='by'"
          toggle-color="primary"
          filled
          :options="Object.freeze([
          {label: 'Sun', value: 0},
          {label: 'Mon', value: 1},
          {label: 'Tue', value: 2},
          {label: 'Wed', value: 3},
          {label: 'Thur', value: 4},
          {label: 'Fri', value: 5},
          {label: 'Sat', value: 6},
        ])"
          emit-value
          map-options
        />

        <q-btn-dropdown
          class="col"
          style="background-color:#FFFFFF22"
          :label="clone.due.value | humanizeDate"
          size="lg"
          v-if="clone.repeat.mode==='once'"
          ref="dateBtn"
        >
          <q-date
            v-model="clone.due.value"
            @input="$refs.dateBtn && $refs.dateBtn.hide()"
          />
        </q-btn-dropdown>

      </q-btn-group>
      <q-btn
        type="submit"
        class="full-width"
        color="primary"
      >Save</q-btn>
      <q-btn
        class="full-width"
        color="negative"
        @click="$router.go(-1)"
      >Cancel</q-btn>

      <q-btn
        class="full-width q-mt-lg"
        color="negative"
        @click="remove"
        v-if="!!$route.params.id"
        icon="delete"
        outline
      >Delete</q-btn>
    </div>
  </q-form>
    </template>
  </FeathersVuexFormWrapper>
  <q-spinner-pie
    v-else
    size="20vmin"
  />
</template>

<script>
  import { mapGetters } from 'vuex';
  import {clone} from 'lodash'
  export default {
    name: 'EditTodo',
    data () {
      return {
        todo: null
      }
    },
    created () {
      const { Todo } = this.$FeathersVuex.api
      console.log(Todo)
      let todo;
      if (this.$route.params.id) {
        const newTodo  = new Todo();
        const existingTodo = Todo.getFromStore(this.$route.params.id);
        this.$set(this, 'todo', Object.assign(newTodo, existingTodo))
      } else {
        todo = new Todo({})
      }
      if(todo){
        this.todo=todo ;
      }
    },
    methods: {
      
      remove () {
        this.$q.dialog({
          title: 'Confirm',
          message: `Would you like to delete theis todo?`,
          cancel: true,
          persistent: true
        }).onOk(() => {
          this.todo.remove().then(res => this.$router.go(-1));
        })
      }
    },
    computed: {
      ...mapGetters({
        users: 'users/list',
        currentUser: 'auth/user'
      })
    },
    // watch: {
    //   'todo.repeat.mode' (newVal, oldVal) {
    //     if (newVal === oldVal) return;
    //     console.log('repeat.mode update')
    //     if (newVal === 'once') {
    //       this.todo.due.value = new Date()
    //     }
    //     if (newVal === 'weekly') {
    //       if (this.todo.due.mode === 'on') {
    //         this.$set(this.todo.due, 'value', [1, 2, 3, 4, 5])
    //       }
    //       if (this.todo.due.mode === 'by') {
    //         this.$set(this.todo.due, 'value', 5)
    //       }

    //     }
    //   },

    //   'todo.due.mode' (newVal, oldVal) {
    //     if (newVal === oldVal) return;
    //     console.log('due.mode update')
    //     if (this.todo.repeat.mode === 'weekly') {
    //       if (newVal === 'on') {
    //         this.$set(this.todo.due, 'value', [1, 2, 3, 4, 5])
    //       }
    //       if (newVal === 'by') {
    //         this.$set(this.todo.due, 'value', 5)
    //       }
    //     }
    //   }
    // }
  }
</script>
