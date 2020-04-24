<template>
      <q-item :to="to" v-ripple   v-on="$listeners" v-bind="$attrs" clickable>
        <q-item-section avatar>
          <q-icon :name="icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">{{title}}</q-item-label>
          <q-item-label caption>{{subtitile}}</q-item-label>
        </q-item-section>
      </q-item>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  props:{
    title:{
      type: String,
      required: true
    },
    subtitile:{
      type: String
    },
    to: {
      type: String,
    },
    icon: {
      type: String
    },
    click:{
      type: Function,
      default: ()=>{}
    }
  }
}
</script>
