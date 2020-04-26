<template>
  <q-page
    padding
    class="flex justify-center"
  >
    <div
      class="q-pa-md"
      style="width:800px"
    >
      <q-stepper
        v-model="step"
        animated
      >
        <q-step
          :name="1"
          title="Welcome!"
          icon="settings"
          :done="step > 1"
        >

          <p class="text-h6 text-weight-light">Looks like you're the first one here. </p>

          <p>We need to get you set up with an account...</p>

          <q-stepper-navigation>
            <q-btn
              @click="step = 2"
              color="primary"
              label="Start"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Create admin account"
          caption="Optional"
          icon="fas fa-user"
          :done="step > 2"
          class="flex justify-center"
        >
          <div style="max-width:500px">
            <p class="text-h6 text-weight-light">Since you're the first one here, you'll be set up as the primary administrator. </p>
            <p>This can be changed later</p>

            <UserForm
              mode="new"
              :value="user"
              @saved="step=3"
            />
          </div>

          <q-stepper-navigation>
            <q-btn
              flat
              @click="step = 1"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="All done"
          icon="check"
          
        >
          <p class="text-h6 text-weight-light">That wasn't so hard, was it?</p>
          <p>Now all that's left is to log in.</p>
          <q-btn to="/login">Take me to the login screen!</q-btn>
        </q-step>

      </q-stepper>
    </div>

  </q-page>
</template>

<script>
  import UserForm from 'components/users/UserForm'
  export default {
    name: 'FirstRun',
    components: { UserForm },
    mounted () {
      const { User } = this.$FeathersVuex.api;
      this.user = new User({ isAdmin: true, type: 'internal' });
    },
    data () {
      return {
        user: null,
        step: 1
      }
    }


  }
</script>
