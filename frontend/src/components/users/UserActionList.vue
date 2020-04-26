<template>
  <q-list style="min-width: 100px">
    <MenuItem
      :title="`Delete ${user.firstName} ${user.lastName}`"
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
        const fullName = `${this.user.firstName} ${this.user.lastName}`
        this.$q.dialog({
          title: 'Delete User',
          icon: 'fas fa-trash',
          message: `Are use sure you want to delete ${fullName}?`,
          cancel: true
        })
          .onOk(() => {
            this.$store.dispatch('users/remove', this.user._id)
              .then(() => {
                this.$q.notify({
                  type: 'positive',
                  message: `${fullName} Deleted`
                })
              });
          })
      }
    }

  }
</script>
