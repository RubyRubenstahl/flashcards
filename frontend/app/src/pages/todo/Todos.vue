<template>
  <section class="admin-categories">
    <UserSelector v-model="selectedUsers"/>
    
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'
  import UserSelector from './UserSelector';

  export default {
    name: 'Todos',
    components: {UserSelector},
    data () {
      return {
        selectedUsers:[]
      }
    },
    computed: {

    }
  }
</script>

