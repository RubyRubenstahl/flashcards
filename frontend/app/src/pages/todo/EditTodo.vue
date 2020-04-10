<template>
  <q-form
    @submit="save"
    v-if="todo"
  >
    <div class="q-gutter-lg flex column full-width">
      <q-input
        autofocus
        label="Task"
        v-model="todo.task"
        class="full-width"
        filled
      >
        <template v-slot:prepend>
          <q-icon name="fas fa-clipboard" />
        </template>
      </q-input>

      <q-input
        label="Description"
        v-model="todo.description"
        class="full-width"
        type="textarea"
        filled
      />
      <q-checkbox
        label="Complete"
        v-model="todo.completed"
        class="full-width"
        filled
      />

      <q-select
        v-model="todo.userId"
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
        v-model="todo.repeat.mode"
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
          v-model="todo.due.mode"
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
          v-model="todo.due.value"
          class="col"
          glossy
          v-if="todo.repeat.mode==='weekly' && todo.due.mode==='on'"
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
                  v-model="todo.due.value"
                  :val="scope.opt.value"
                />
              </q-item-section>
            </q-item>
          </template>
        </q-select>

        <q-select
          class="col"
          v-model="todo.due.value"
          v-if="todo.repeat.mode==='weekly' && todo.due.mode==='by'"
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
          :label="todo.due.value | humanizeDate"
          size="lg"
          v-if="todo.repeat.mode==='once'"
          ref="dateBtn"
        >
          <q-date
            v-model="todo.due.value"
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
  <q-spinner-pie
    v-else
    size="20vmin"
  />
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'EditTodo',
    data () {
      return {
        todo: null
      }
    },
    created () {
      const { Todo } = this.$FeathersVuex.api
      if (this.$route.params.id) {
        this.$store.dispatch('todo/get', this.$route.params.id).then(res => this.todo = res.clone())
      } else {
        this.todo = new Todo({ userId: this.currentUser._id }).clone()
      }
    },
    methods: {
      save () {
        const $q = this.$q
        this.todo.save().then(res => this.$router.go(-1))
          .catch(err => {
            $q.notify({
              message: err.message,
              icon: 'fas fa-error',
              progress: true,
              color: 'negative',
              textColor: 'white',
              position: 'top'
            })
          });
      },
      remove () {
        this.$q.dialog({
          title: 'Confirm',
          message: `Would you like to delete ${this.todo.name}?`,
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
    watch: {
      'todo.repeat.mode' (newVal, oldVal) {
        if (newVal === oldVal) return;
        console.log('repeat.mode update')
        if (newVal === 'once') {
          this.todo.due.value = new Date()
        }
        if (newVal === 'weekly') {
          if (this.todo.due.mode === 'on') {
            this.$set(this.todo.due, 'value', [1, 2, 3, 4, 5])
          }
          if (this.todo.due.mode === 'by') {
            this.$set(this.todo.due, 'value', 5)
          }

        }
      },

      'todo.due.mode' (newVal, oldVal) {
        if (newVal === oldVal) return;
        console.log('due.mode update')
        if (this.todo.repeat.mode === 'weekly') {
          if (newVal === 'on') {
            this.$set(this.todo.due, 'value', [1, 2, 3, 4, 5])
          }
          if (newVal === 'by') {
            this.$set(this.todo.due, 'value', 5)
          }
        }
      }
    }
  }
</script>
