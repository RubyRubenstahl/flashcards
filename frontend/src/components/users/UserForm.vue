<template>
  <section v-if="value">
  <FeathersVuexFormWrapper
    :item="value"
    watch
    
  >
    <template v-slot="{ clone:user, save, reset, remove }">
      <q-form
        @submit="()=>{saving=true; save().then(handleSaveResponse)}"
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="false"
        v-if="value"
      >
        <q-input v-model="user.username" label="Username" autofocus></q-input>
        <q-input v-model="user.firstName" label="First Name"></q-input>
        <q-input v-model="user.lastName" label="Last Name"></q-input>
        <q-input v-model="user.email" label="email"></q-input>
        <q-input
          v-if="mode==='new'"
          label="password"
          v-model="user.password"
          type="password"
        ></q-input>
        <q-btn
          label="Reset"
          @click="reset"
        ></q-btn>
        <q-btn
          label="Cancel"
          @click="$emit('cancel')"
        ></q-btn>
        <q-btn
          label="Save"
          type="submit"
          :loading="saving"
        ></q-btn>
      </q-form>
    </template>
  </FeathersVuexFormWrapper>
  </section>
</template>

<script>
  export default {
    // name: 'ComponentName',
    data () {
      return {
        saving:false
      }
    },
    methods:{
      handleSaveResponse(res){
        this.saving=false;
        this.$emit('saved', res);
          this.$q.notify({
                  type: 'positive',
                  message: `User "${res.username}" ${this.mode==='new' ? 'created' : 'saved'}.`
        })
      },
      handleSaveError(err){
        this.saving=false;
        this.$q.notify({
                  type: 'negative',
                  message: `Failed to save user. Reason: ${err.message}`
        })
      }
    },
    props: {
      value: {
        type: Object
      },
      mode:{
        type: String,
        required: 'true'
      }
    }
  }
</script>
