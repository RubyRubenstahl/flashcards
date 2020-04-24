<template>
  <q-list style="min-width: 100px">
    <!-- <MenuItem
      :title="`Edit ${company.companyname}`"
      icon="fas fa-edit"
      :to="`/app/settings/companies/${company._id}`"
    /> -->
    <MenuItem
      :title="`Delete ${company.companyname}`"
      icon="fas fa-trash"
      @click="confirmDelete"
    />
  </q-list>
</template>

<script>
  import MenuItem from 'components/ui/MenuItem';
  export default {
    name: 'CompaniesActionList',
    components: { MenuItem },
    data () {
      return {}
    },
    props: {
      company: {
        type: Object,
        required: true
      }
    },
    methods: {
      confirmDelete () {
        this.$q.dialog({
          title: 'Delete Companies',
          icon: 'fas fa-trash',
          message: `Are use sure you want to delete ${this.company.companyname}?`,
          cancel: true
        })
          .onOk(() => {
            this.$store.dispatch('companies/remove', this.company._id)
              .then(() => {
                this.$q.notify({
                  type: 'positive',
                  message: `${this.company.companyname} Deleted`
                })
              });
          })
      }
    }

  }
</script>
