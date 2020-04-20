<template>
  <AuthPageWrapper title="KrohTech Partner Manager">
    <q-form @submit="login">
      <div class="q-gutter-md q-pl-md">
        <q-input
          autofocus
          label="Username"
          v-model="username"
          class="full-width"
          filled
        ></q-input>
        <q-input
          label="Password"
          type="password"
          v-model="password"
          class="full-width"
          filled
        ></q-input>
        <div
          class="text-red full-width flex flex-center"
          v-if="errorOnAuthenticate"
        >
          {{errorOnAuthenticate.message}}
        </div>
        <q-btn
          type="submit"
          class="full-width"
          color="primary"
        >Login</q-btn>
      </div>
    </q-form>
  </AuthPageWrapper>
</template>

<script>
  import { mapState } from 'vuex'
  import AuthPageWrapper from './AuthPageWrapper'
  export default {
    name: 'Login',
    components: { AuthPageWrapper },
    data () {      return {
        username: null,
        password: null,
        prevRoute:null
      }
    },
    computed: {
      ...mapState('auth', ['errorOnAuthenticate', 'isAuthenticatePending']),

    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.prevRoute = from
      })
    },
    methods: {
      redirectUrl () {
        const pendingRoute = this.$router.history.pending || this.prevRoute;
        const path = pendingRoute && pendingRoute.path;
        if(typeof path ==='string' && path.startsWith('/app')){
            return path;
        }else{
          return '/app'
        }
        
      },
      login () {
        console.log('Logging in')
        const redirectUrl = this.redirectUrl();
        const router = this.$router;
        this.$store.dispatch('auth/authenticate', {
          strategy: 'local',
          username: this.username,
          password: this.password
        }).then(res => {
          router.push(redirectUrl);
        }).catch(err => console.error(err.message, err))
      }
    }
  }
</script>
