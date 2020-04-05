<template>
  <q-layout view="lHh Lpr lFf">
    <SillyAnimations/>
    <q-header  class="transparent">
      <q-toolbar class="transparent">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="text-uppercase text-weight-light">
          The Rubenstahl App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered

    >
      <q-list>
        <q-item-label
          header

        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="cover">
      <!-- This is where pages get injected -->
      <transition

      >
        <router-view />
      </transition>

    </q-page-container>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import SillyAnimations from 'components/SillyAnimations'
export default {
  name: 'MainLayout',

  components: {
    EssentialLink, SillyAnimations
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Logout',
          icon: 'logout',
          to: '/logout'
        }
      ]
    }
  }
}
</script>
