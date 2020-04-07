<template>
  <q-layout view="lHh Lpr lFf">
    <SillyAnimations />

    <q-page-container class="cover">

      <q-page class="flex column">

          <Breadcrumbs  style="padding-left:20vw; padding-top:10vh"/>


        <div class="full-width flex flex-center">

            <router-view />
        </div>
      </q-page>
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
