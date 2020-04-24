<template>
  <q-list style="min-width: 100px">
    <!-- <MenuItem
      :title="`Edit ${project.projectname}`"
      icon="fas fa-edit"
      :to="`/app/settings/projects/${project._id}`"
    /> -->
    <MenuItem
      :title="`Delete ${project.projectname}`"
      icon="fas fa-trash"
      @click="confirmDelete"
    />
  </q-list>
</template>

<script>
  import MenuItem from 'components/ui/MenuItem';
  export default {
    name: 'ProjectsActionList',
    components: { MenuItem },
    data () {
      return {}
    },
    props: {
      project: {
        type: Object,
        required: true
      }
    },
    methods: {
      confirmDelete () {
        this.$q.dialog({
          title: 'Delete Projects',
          icon: 'fas fa-trash',
          message: `Are use sure you want to delete ${this.project.projectname}?`,
          cancel: true
        })
          .onOk(() => {
            this.$store.dispatch('projects/remove', this.project._id)
              .then(() => {
                this.$q.notify({
                  type: 'positive',
                  message: `${this.project.projectname} Deleted`
                })
              });
          })
      }
    }

  }
</script>
