<template>
  <q-form
    @submit="save"
    v-if="tv"
  >
    <div class="q-gutter-md">
      <q-input
        autofocus
        label="Tv Name"
        v-model="tv.name"
        class="full-width"
        filled
      ></q-input>
      <q-input
        label="Icon"
        v-model="tv.icon"
        class="full-width"
        filled
      ></q-input>
      <q-input
        label="Image filename"
        v-model="tv.imageUrl"
        class="full-width q-pb-lg"
        filled
      ></q-input>

      <q-input
        label="Roku IP Address"
        v-model="tv.roku.ip"
        class="full-width"
        filled
      ></q-input>
      <q-input
        label="Roku Port"
        v-model="tv.roku.port"
        class="full-width q-pb-lg"
        filled
      ></q-input>

      <q-input
        label="LIRC IP Address"
        v-model="tv.lirc.ip"
        class="full-width"
        filled
      ></q-input>
      <q-input
        label="LIRC Port"
        v-model="tv.roku.port"
        class="full-width"
        filled
      ></q-input>

      <q-btn
        type="submit"
        class="full-width"
        color="primary"
      >Save</q-btn>
      <q-btn
        class="full-width"
        color="negative"
        @click="$router.go(-1)"
      >Cancel</q-btn>

      <q-btn
        class="full-width q-mt-lg"
        color="negative"
        @click="remove"
        v-if="!!$route.params.id"
        icon="delete"
        outline
      >Delete</q-btn>
    </div>
  </q-form>
  <q-spinner-pie
    v-else
    size="20vmin"
  />
</template>

<script>
  import HexButtonGroup from 'components/HexButtonGroup'
  export default {
    name: 'EditTv',
    components: { HexButtonGroup },
    data () {
      return {
        tv: null
      }
    },
    created () {
      const { Tv } = this.$FeathersVuex.api
      console.log(Tv)
      let tv;
      if (this.$route.params.id) {
        tv  = Tv.getFromStore(this.$route.params.id)
      } else {
        tv = new Tv({}).clone()
      }
      if(tv){
        this.tv=tv ;
      }
    },

    methods: {
      save () {
        this.tv.save().then(res => this.$router.go(-1));
      },
      remove () {
        this.$q.dialog({
          title: 'Confirm',
          message: `Would you like to delete ${this.tv.name}?`,
          cancel: true,
          persistent: true
        }).onOk(() => {
          this.tv.remove().then(res => this.$router.go(-1));
        })
      }
    }
  }
</script>
