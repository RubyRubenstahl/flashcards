<template>
    <HexButtonGroup :buttons="buttons" />
</template>

<script>
  import HexButtonGroup from 'components/HexButtonGroup'
  export default {
    name: 'PageIndex',
    components: { HexButtonGroup },
    data () {
      return {
        buttons: [
          {            
            title: "Users",
            icon: "fas fa-users",
            to: "/app/admin/users",
            color: "#00FFFF22"
          },
        ]
      }
    }
  }
</script>
