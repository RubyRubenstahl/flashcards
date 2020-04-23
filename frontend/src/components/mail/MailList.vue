<template>
  <q-list>
    <q-item v-if="!emails">
      <q-item-section>
        No mail found :(
      </q-item-section>
    </q-item>

    <q-expansion-item
      v-else
      v-for="email in emails"
      :key="email._id"
      :label="email.from"
      :caption="email.subject"
    >
      <template v-slot:header>
        <q-item-section avatar>
          <q-avatar
            icon="fas fa-envelope"
            color="primary"
            text-color="white"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{email.subject}}</q-item-label>
          <q-item-label caption>From: {{email.from}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>{{email.received | humanizeDuration}}</q-item-label>
        </q-item-section>
      </template>
      <q-card>
        <q-card-section class="bg-white">
          <div v-html="email.html"></div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
  export default {
    // name: 'ComponentName',
    data () {
      return {}
    },
    props: {
      emails: {
        type: Array
      }
    }
  }
</script>
