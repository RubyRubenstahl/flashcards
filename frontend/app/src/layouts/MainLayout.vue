<template>
  <q-layout view="lHh Lpr lFf">
    <SillyAnimations />
    <q-header class="transparent">
      <h1 style="padding-left:20vw;font-size:10vmin;opacity:0.3">
        <q-icon
          :name="$route.meta.icon"
          size="20vmin"
          class="q-pr-xl"
        ></q-icon>
        {{$route.name}}
      </h1>
      <q-toolbar>
        <Breadcrumbs />
      </q-toolbar>
    </q-header>

    <q-page-container class="cover">
      <!-- This is where pages get injected -->
      <transition>
        <router-view />
      </transition>

    </q-page-container>

  </q-layout>
</template>

<script>
  import EssentialLink from 'components/EssentialLink'
  import SillyAnimations from 'components/SillyAnimations'
  import Breadcrumbs from 'components/Breadcrumbs'
  export default {
    name: 'MainLayout',

    components: {
      EssentialLink, SillyAnimations, Breadcrumbs
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
