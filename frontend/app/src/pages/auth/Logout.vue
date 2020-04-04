<template>
  <q-page
    padding
    class="flex flex-center"
  >
    <div class="q-gutter-md">

        <h1
          class="text-h1 flex flex-center"
          v-if="isAuthenticated"
        >Logging out...</h1>
        <h1
          class="text-h1 flex flex-center"
          v-else
        >Logout complete.</h1>

    </div>
  </q-page>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  export default {
    name: 'Logout',
    computed: {
      ...mapGetters('auth', ['isAuthenticated'])
    },
    mounted () {
      setTimeout(() => {
        this.logout()
      }, 1000);
    },
    methods: {
      logout () {
        this.$store.dispatch('auth/logout', {
        }).then(res => {
          setTimeout(() => {
            this.$router.push('/app')
          }, 5000)
        })
      }
    }
  }
</script>
