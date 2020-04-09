<template>
    <HexButtonGroup :buttons="buttons" />
</template>

<script>
  import HexButtonGroup from 'components/HexButtonGroup'
  import { mapGetters } from 'vuex';

  export default {
    name: 'Users',
    components: { HexButtonGroup },
    created () {
      this.$store.dispatch('users/find', {})
    },
    computed: {
      ...mapGetters({ users: 'users/list' }),
      buttons () {
        return [
          ...this.users.map(user=>({
            title:user.username,
            to: `/app/admin/users/settings/${user._id}`,
            icon: 'fas fa-user'
          })),
             {
            title: "Add a User",
            icon: "fas fa-plus-circle",
            to: "/app/admin/users/new",
            color: "#00FFFF22"          },

        ]
      }

    },


    data () {
      return {
          }
    }
  }
</script>
