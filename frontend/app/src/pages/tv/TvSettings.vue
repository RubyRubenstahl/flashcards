<template>
  <q-page class="flex flex-center">
   
    <HexButton
      v-for="tv in tvs" :key="tv._id"
      :title="tv.name"
      :icon="tv.icon || 'tv'"
      action-icon="fas fa-edit"
      :to="`/app/tv/edit/${tv._id}`"
      />
    <HexButtonGroup :buttons="buttons" />
  </q-page>
</template>

<script>
  import HexButtonGroup from 'components/HexButtonGroup'
  import HexButton from 'components/HexButton'
  import {mapGetters} from 'vuex';
  export default {
    name: 'TvSettings',
    components: { HexButtonGroup, HexButton },
    created(){
      this.$store.dispatch('tv/find', {})
    },
    data () {
      return {
        buttons: [
          {
            title: "Add a TV",
            icon: "fas fa-plus-circle",
            to: "/app/tv/new",
            color: "#00FFFF22"
          },

        ]
      }
    },
    computed:{
      ...mapGetters({tvs:'tv/list'}),
    }
  }
</script>
