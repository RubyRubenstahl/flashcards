<template>
  <q-list>
    <q-item v-if="!projects">
      <q-item-section>
        No Projects Found:(
      </q-item-section>
    </q-item>

    <q-expansion-item
      v-else
      v-for="project in projects"
      :key="project._id"
      switch-toggle-side
      group="projects"
    >
      <template v-slot:header>
        <q-item-section avatar>
          <q-avatar
            icon="fas fa-project"
            color="primary"
            text-color="white"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{project.name}}</q-item-label>
          <q-item-label caption></q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn
            dense
            flat
            round
            icon="fas fa-ellipsis-v"
            @click.stop
          >
            <q-menu>
              <ProjectsActionList :project="project"></ProjectsActionList>
            </q-menu>
          </q-btn>
        </q-item-section>
      </template>
      <q-card>
        <q-card-section>
          <ProjectForm
            :value="project"
            mode="edit"
          />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
  import ProjectsActionList from './ProjectsActionList';
  import ProjectForm from './ProjectForm';

  export default {
    name: 'ProjectsList',
    components: { ProjectsActionList, ProjectForm },
    data () {
      return {}
    },
    props: {
      projects: {
        type: Array,
        required: true
      }
    }
  }
</script>
