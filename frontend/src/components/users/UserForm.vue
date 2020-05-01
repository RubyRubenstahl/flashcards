<template>
  <section v-if="value">
    <FeathersVuexFormWrapper
      :item="value"
      watch
    >
      <template v-slot="{ clone:user, save, reset, remove }">
        <q-form
          @submit="()=>{saving=true; save().then(handleSaveResponse).catch(handleSaveError)}"
          autocorrect="off"
          autocapitalize="off"
          autocomplete="off"
          spellcheck="false"
          v-if="value"
        >

          <div
            class="q-gutter-sm"
            style="max-width:600px"
          >

              <q-btn-toggle
                class="full-width q-my-lg"
                spread
                rounded
                v-model="user.type"
                push
                toggle-color="primary"
                :options="[
                  {label: 'Internal User', value: 'internal'},
                  {label: 'Contact', value: 'contact'},
                  {label: 'Partner', value: 'partner'},
                  {label: 'Client', value: 'client'}
                ]"
              />



            <q-input
              color="secondary"
              filled
              v-model="user.email"
              label="email"
              autofocus
            ></q-input>
            <q-input
              color="secondary"
              filled
              v-model="user.firstName"
              label="First Name"
            ></q-input>
            <q-input
              color="secondary"
              filled
              v-model="user.lastName"
              label="Last Name"
            ></q-input>
            <q-input
              color="secondary"
              filled
              v-model="user.displayName"
              label="Display Name"
            ></q-input>
            <q-input
              color="secondary"
              filled
              v-model="user.businessPhone"
              label="Business Phone Number"
            ></q-input>
            <q-input
              color="secondary"
              filled
              v-model="user.mobilePhone"
              label="Business Phone Number"
            ></q-input>
            <q-input
              color="secondary"
              filled
              v-model="user.department"
              label="Department"
            ></q-input>
            <q-input
              color="secondary"
              filled
              v-model="user.title"
              label="Title"
            ></q-input>
            <q-input
              filled
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
          </div>
        </q-form>
      </template>
    </FeathersVuexFormWrapper>
  </section>
  <q-skeleton
    v-else
    width="100%"
    height="300px"
  ></q-skeleton>
</template>

<script>
  export default {
    // name: 'ComponentName',
    data () {
      return {
        saving: false
      }
    },
    methods: {
      handleSaveResponse (res) {
        this.saving = false;
        this.$emit('saved', res);
        this.$q.notify({
          type: 'positive',
          message: `User "${res.displayName}" ${this.mode === 'new' ? 'created' : 'saved'}.`
        })
      },
      handleSaveError (err) {
        this.saving = false;
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
      mode: {
        type: String,
        required: 'true'
      }
    }
  }
</script>
