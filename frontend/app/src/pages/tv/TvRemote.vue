<template>
  <q-page class="flex flex-center">
    <FeathersVuexGet
      service="tv"
      :id="$route.params.id"
    >
      <template slot-scope="{ item: tv }">
        <span v-if="tv">
        {{ tv }}
        </span>
      </template>
    </FeathersVuexGet>

  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'TvRemote',
    created () {
    },
    data () {
      return {


      }
    },
    computed: {
    }
  }
</script>
