<template>
  <q-page padding>

    <FeathersVuexFind
      service="/mail/incoming"
      :query="{}"
      watch="query"
    >
      <section
        class="admin-categories"
        slot-scope="{ items: emails }"
      >
        <MailList  :emails="emails"/>
      </section>
    </FeathersVuexFind>
  </q-page>
</template>

<script>
  import MailList from 'components/mail/MailList';
  export default {
    name: 'PageName',
    components: { MailList },
    data(){return {query:{}}}
  }
</script>
