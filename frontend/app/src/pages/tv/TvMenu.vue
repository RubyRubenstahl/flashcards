<template>
  <q-page class="flex flex-center">
      <HexButton
      v-for="tv in tvs" :key="tv._id"
      :title="tv.name"
      :icon="tv.icon || 'tv'"
      action-icon="fas fa-edit"
      :to="`/app/tv/remote/${tv._id}`"
      />
    <HexButtonGroup :buttons="buttons" />

  </q-page>
</template>

<script>
  import HexButtonGroup from 'components/HexButtonGroup'
  import HexButton from 'components/HexButton'
  import {mapGetters} from 'vuex';

  export default {
    name: 'TvMenu',
    components: { HexButtonGroup, HexButton },
    created(){
      this.$store.dispatch('tv/find', {})
    },
       computed:{
      ...mapGetters({tvs:'tv/list'}),
    },
    data () {
      return {
        buttons: [
          {
            title: "Settings",
            icon: "fas fa-cog",
            to: "/app/tv/settings",
            color: "#00FFFF22"
          },

        ]
      }
    }
  }
</script>
