<template>
  <q-page
    padding
    class="flex flex-center"
  >
    <q-form @submit="login">
      <div class="q-gutter-md">
        <h1 class="text-h5 flex flex-center">The Rubenstahl App</h1>
        <q-input
          label="Username"
          v-model="username"
          filled
        ></q-input>
        <q-input
          label="Password"
          type="password"
          v-model="password"
          filled
        ></q-input>
        <q-banner class="bg-red text-white" v-if="errorOnAuthenticate">
          {{errorOnAuthenticate.message}}
        </q-banner>
        <q-btn type="submit" :loading="isAuthenticatePending">Login</q-btn>
        
      </div>
    </q-form>
  </q-page>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'Login',
    data () {      return {
        username: null,
        password: null
      }
    },
    computed:{
      ...mapState('auth', ['errorOnAuthenticate', 'isAuthenticatePending'])
    },
    methods: {
      login () {
        this.$store.dispatch('auth/authenticate', {
          strategy: 'local',
          username: this.username,
          password: this.password
        }).then(res=>{
          this.$router.push('/app')
        })
      }
    }
  }
</script>
