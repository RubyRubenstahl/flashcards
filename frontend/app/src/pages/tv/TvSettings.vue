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
            to: `/app/tv/edit/${button._id}`,
            actionIcon: 'fas fa-edit'
          })),
          {
            title: "Add Tv",
            icon: "tv",
            actionIcon: "fas fa-plus-circle",
            to: "/app/tv/new",
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
