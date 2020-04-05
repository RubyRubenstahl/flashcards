<template>
  <q-page class="flex flex-center">
    <HexButtonGroup :buttons="buttons" />
  </q-page>
</template>

<script>
  import HexButtonGroup from '../components/HexButtonGroup'
  export default {
    name: 'TV',
    components: { HexButtonGroup },
    data () {
      return {
        buttons: [
          {
            title: "Settings",
            icon: "fas fa-cog",
            to: "/app/setup/tv",
            color: "#00FFFF22"
          },

        ]
      }
    }
  }
</script>
