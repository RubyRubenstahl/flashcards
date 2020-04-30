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
        done-color="positive"
      >
        <q-step
          :name="1"
          title="Welcome!"
          icon="settings"
          :done="step > 1"
        >
          <div class="flex">
            <Character pose="hello" />

            <div>
              <p class="text-h6 text-weight-light">Looks like you're the first one here! </p>
              <p>We need to get you set up with an account...</p>
              <q-stepper-navigation>
                <q-btn
                  @click="step = 2"
                  color="primary"
                  label="Start"
                />
              </q-stepper-navigation>
            </div>

          </div>
        </q-step>

        <q-step
          :name="2"
          title="Create admin account"
          caption="Optional"
          icon="fas fa-user"
          :done="step > 2"
        >
          <div class="flex no-wrap">
            <div class="">
              <p class="text-h6 text-weight-light">Since you're the first one here, you'll be set up as the primary administrator. </p>
              <p class="">How would you like to set up your account?</p>
              <div
                class="q-ma-lg"
                style="max-width:200px"
              >
                <OauthLoginButtons />

                <q-stepper-navigation>
                  <q-btn
                    class="full-width"
                    @click="step = 3"
                    color="primary"
                    label="Sign up by email"
                    icon="fas fa-envelope"
                  />
                </q-stepper-navigation>
              </div>

            </div>
            <Character pose="neutral" />
          </div>
        </q-step>

        <q-step
          :name="3"
          title="Sign up by email"
          caption="Optional"
          icon="fas fa-envelope"
          :done="step > 3"
          class="flex justify-center"
        >

          <div class="flex no-wrap full-width">
            <Character pose="neutral" class="q-pr-xl q-mt-xl"/>

            <div >
                <UserForm
                mode="new"
                :value="user"
                @saved="step=3"
              />

              <q-stepper-navigation>
                <q-btn
                  @click="step = 2"
                  color="primary"
                  label="Back"
                />
              </q-stepper-navigation>

            </div>
            <q-space></q-space>

          </div>
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
  import OauthLoginButtons from 'components/auth/OauthLoginButtons'
  import Character from 'components/Character'

  export default {
    name: 'FirstRun',
    components: { UserForm, OauthLoginButtons, Character },
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
