<template>
    <q-form @submit="save" v-if="user">
      <div class="q-gutter-md">
        <q-input
          autofocus
          label="User Name"
          v-model="user.username"
          class="full-width"
          filled
        ></q-input>
        <q-input
          autofocus
          label="Password"
          v-if="$route.meta.mode==='new'"
          type="password"
          v-model="user.password"
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
    <q-spinner-pie v-else size="20vmin" />
</template>

<script>
  import { FeathersVuexFormWrapper } from 'feathers-vuex'

  export default {
    name: 'EditUser',
    components: {  FeathersVuexFormWrapper },
    data () {
      return {
        user: null
      }
    },
    created (){
      const { User } = this.$FeathersVuex.api

       if(this.$route.params.id){
        this.$store.dispatch('users/get', this.$route.params.id).then(res=>{
          this.user=res})
      }else{
        this.user = new User({ }).clone()

      }

    },

    methods: {
      save () {
        this.user.save().then(res=>this.$router.go(-1));
      },
      remove(){
        this.$q.dialog({
        title: 'Confirm',
        message: `Would you like to delete ${this.user.name}?`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.user.remove().then(res=>this.$router.go(-1));
      })
    }
  }
  }
</script>
