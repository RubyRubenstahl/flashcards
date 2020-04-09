<template>
    <HexButtonGroup :buttons="buttons" />
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
            title: "Add a Tv",
            icon: "fas fa-plus-circle",
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
