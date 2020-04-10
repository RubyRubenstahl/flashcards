<template>
  <q-form
    @submit="save"
    v-if="todo"
  >
    <div class="q-gutter-md">
      <q-input
        autofocus
        label="Todo Name"
        v-model="todo.name"
        class="full-width"
        filled
      ></q-input>

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
  import HexButtonGroup from 'components/HexButtonGroup'
  export default {
    name: 'EditTv',
    components: { HexButtonGroup },
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
        this.todo = new Todo({}).clone()
      }
    },
    methods: {
      save () {
        this.todo.save().then(res => this.$router.go(-1));
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
    }
  }
</script>
