<template>
    <HexButtonGroup :buttons="buttons" />
</template>

<script>
  import HexButtonGroup from '../components/HexButtonGroup'
  export default {
    name: 'PageIndex',
    components: { HexButtonGroup },
    data () {
      return {
        buttons: [
          {            title: "TV",
            icon: "tv",
            to: "/app/tv",
            color: "#00FFFF22"
          },
          {            title: "Budgeting",
            icon: "attach_money",
            to: "/budgeting",
            color: "#00FF4422"
          },
          {            title: "Shopping List",
            icon: "shopping_cart",
            to: "/shopping-list",
            color: "#AA44FF33"
          },
          {            title: "Medical",
            icon: "local_pharmacy",
            to: "/shopping-list",
            color: "#FF000022"
          },
          {            
            title: "Admin Panel",
            icon: "fas fa-user-cog",
            to: "/app/admin",
            color: "#FF000022"
          },
        ]
      }
    }
  }
</script>
