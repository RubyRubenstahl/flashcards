<template>
  <section v-if="value">
    <FeathersVuexFormWrapper
      :item="value"
      watch
    >
      <template v-slot="{ clone:project, save, reset, remove }">
        <q-form
          @submit="()=>{saving=true; save().then(handleSaveResponse).catch(handleSaveError)}"
          autocorrect="off"
          autocapitalize="off"
          autocomplete="off"
          spellcheck="false"
          v-if="value"
        >
          <q-input
            v-model="project.name"
            label="Name"
            autofocus
          ></q-input>
          <RichTextEditor
            v-model="project.description"
            label="Description"
            autofocus
          ></RichTextEditor>

          <q-btn
            label="Reset"
            @click="reset"
          ></q-btn>
          <q-btn
            label="Cancel"
            @click="$emit('cancel')"
          ></q-btn>
          <q-btn
            label="Save"
            type="submit"
            :loading="saving"
          ></q-btn>
        </q-form>
      </template>
    </FeathersVuexFormWrapper>
  </section>
</template>

<script>
  import RichTextEditor from 'components/ui/RichTextEditor';

  export default {
    name: 'ProjectForm',
    components: {RichTextEditor},
    data () {
      return {
        saving: false
      }
    },
    methods: {
      handleSaveResponse (res) {
        this.saving = false;
        this.$emit('saved', res);
        this.$q.notify({
          type: 'positive',
          message: `Projects "${res.projectname}" ${this.mode === 'new' ? 'created' : 'saved'}.`
        })
      },
      handleSaveError (err) {
        this.saving = false;
        this.$q.notify({
          type: 'negative',
          message: `Failed to save project. Reason: ${err.message}`
        })
      }
    },
    props: {
      value: {
        type: Object
      },
      mode: {
        type: String,
        required: 'true'
      }
    }
  }
</script>
