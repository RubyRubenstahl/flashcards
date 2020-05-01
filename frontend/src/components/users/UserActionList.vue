<template>
  <q-list style="min-width: 100px">
    <MenuItem
      :title="`Delete ${user.displayName}`"
      icon="fas fa-trash"
      @click="confirmDelete"
    />
  </q-list>
</template>

<script>
  import MenuItem from 'components/ui/MenuItem';
  export default {
    name: 'UsersActionList',
    components: { MenuItem },
    data () {
      return {}
    },
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    methods: {
      confirmDelete () {
        this.$q.dialog({
          title: 'Delete User',
          icon: 'fas fa-trash',
          message: `Are use sure you want to delete ${this.user.displayName}?`,
          cancel: true
        })
          .onOk(() => {
            this.$store.dispatch('users/remove', this.user._id)
              .then(() => {
                this.$q.notify({
                  type: 'positive',
                  message: `${this.user.displayName} Deleted`
                })
              });
          })
      }
    }

  }
</script>
