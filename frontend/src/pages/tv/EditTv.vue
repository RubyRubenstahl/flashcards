<template>
    
  <FeathersVuexFormWrapper :item="tv" watch  v-if="tv">
    <template v-slot="{ clone, save, reset }">
  <q-form
    @submit="save().then(()=>$router.go(-1))"
  >
    <div class="q-gutter-md">
      <q-input
        autofocus
        label="Tv Name"
        v-model="clone.name"
        class="full-width"
        filled
      ></q-input>
      <q-input
        label="Icon"
        v-model="clone.icon"
        class="full-width"
        filled
      ></q-input>
      <q-input
        label="Image filename"
        v-model="clone.imageUrl"
        class="full-width q-pb-lg"
        filled
      ></q-input>

      <q-input
        label="Roku IP Address"
        v-model="clone.roku.ip"
        class="full-width"
        filled
      ></q-input>
      <q-input
        label="Roku Port"
        v-model="clone.roku.port"
        class="full-width q-pb-lg"
        filled
      ></q-input>

      <q-input
        label="LIRC IP Address"
        v-model="clone.lirc.ip"
        class="full-width"
        filled
      ></q-input>
      <q-input
        label="LIRC Port"
        v-model="clone.roku.port"
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
        @click="remove(clone)"
        v-if="!!$route.params.id"
        icon="delete"
        outline
      >Delete</q-btn>
    </div>
  </q-form>
    </template>
  </FeathersVuexFormWrapper>
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
        const newTv  = new Tv();
        const existingTv = Tv.getFromStore(this.$route.params.id);
        this.$set(this, 'tv', Object.assign(newTv, existingTv))
      } else {
        tv = new Tv({})
      }
      if(tv){
        this.tv=tv ;
      }
    },

    methods: {
  
      remove (clone) {
        this.$q.dialog({
          title: 'Confirm',
          message: `Would you like to delete ${clone.name}?`,
          cancel: true,
          persistent: true
        }).onOk(() => {
          clone.remove().then(res => this.$router.go(-1));
        })
      }
    }
  }
</script>
