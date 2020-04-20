<template>
  <q-list>
    <q-item v-if="!emails">
      <q-item-section >
        No mail found :(
      </q-item-section>
    </q-item>

    <q-item v-else v-for="email in emails" :key ="email._id">
      <q-item-section >
        {{email.subject}}
      </q-item-section>
    </q-item>

  </q-list>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  props:{
    emails:{
      type: [String]
    }
  }
}
</script>
