<template>
  <AuthPageWrapper title="The Rubenstahl App">
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
        <q-banner
          class="bg-red text-white"
          v-if="errorOnAuthenticate"
        >
          {{errorOnAuthenticate.message}}
        </q-banner>
        <q-btn
          type="submit"
          class="full-width"
          :loading="isAuthenticatePending"
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
        password: null
      }
    },
    computed: {
      ...mapState('auth', ['errorOnAuthenticate', 'isAuthenticatePending'])
    },
    methods: {
      login () {
        this.$store.dispatch('auth/authenticate', {
          strategy: 'local',
          username: this.username,
          password: this.password
        }).then(res => {
          this.$router.push('/app')
        })
      }
    }
  }
</script>
