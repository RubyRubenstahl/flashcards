<template>
  <q-page
    padding
    class="flex flex-center column" style="opacity:0.6"
  >
          

        <h1
          class="text-h1 "
          v-if="isAuthenticated"
        >Logging out...</h1>
        <h1
         class="text-h1 "
          v-else
        >Logout complete.</h1>

        <q-spinner-gears
          style="margin-bottom:30vh"
          color="white"
          size="20vh"
        />
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
      window.localStorage.clear();
    },
    methods: {
      logout () {
        const router = this.$router;
        this.$store.dispatch('auth/logout', {
        }).finally(res => {
          localStorage.clear();
          setTimeout(() => {
            location.replace('/#/login');
          }, 2000)
        })
      }
    }
  }
</script>
