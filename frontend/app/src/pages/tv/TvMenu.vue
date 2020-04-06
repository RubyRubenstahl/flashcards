<template>
  <q-page class="flex flex-center">
    <HexButtonGroup :buttons="buttons" />
  </q-page>
</template>

<script>
  import HexButtonGroup from 'components/HexButtonGroup'
  import { mapGetters } from 'vuex';

  export default {
    name: 'TvMenu',
    components: { HexButtonGroup },
    created () {
      this.$store.dispatch('tv/find', {})
    },
    computed: {
      ...mapGetters({ tvButtons: 'tv/tvButtons' }),
      buttons () {
        return [
          ...this.tvButtons.map(button=>({
            ...button, 
            to: `/app/tv/remote/${button._id}`,
          })),
          {
            title: "Settings",
            icon: "fas fa-cog",
            to: "/app/tv/settings",
            color: "#00FFFF22"          },

        ]
      }

    },


    data () {
      return {
          }
    }
  }
</script>
