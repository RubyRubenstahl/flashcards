<template>
  <q-layout view="hHh lpR fFf">

    <q-header
      elevated
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="left = !left"
        />

        <q-toolbar-title class="text-weight-thin text-uppercase">
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar> -->
          Flashcards
        </q-toolbar-title>

        <q-btn
          dense
          flat
          round
        >
        <q-avatar>
           <img v-if="user && user.avatar" :src="user.avatar"/>

          <q-menu>
            <MenuItem title="User Profile" icon="fas fa-edit" to="/app/profile"></MenuItem>
            <MenuItem title="Sign Out" icon="logout" to="/logout"></MenuItem>
          </q-menu>
        </q-avatar>
        </q-btn>
          <MainFAB/>
      </q-toolbar>

      <!-- <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs> -->
    </q-header>

    <q-drawer
      show-if-above
      v-model="left"
      side="left"
      bordered
    >
      <MainMenu />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      elevated
      class="bg-grey-8 text-white"
    >
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title -->
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
  import MainMenu from 'components/ui/MainMenu'
  import MenuItem from 'components/ui/MenuItem'
  import MainFAB from 'components/MainFAB'
  export default {
    components: { MainMenu, MenuItem, MainFAB },
    data () {
      return {
        left: false,
      }
    },
    computed:{
      user(){
      return this.$store.state.auth.user
      }
    }

  }
</script>