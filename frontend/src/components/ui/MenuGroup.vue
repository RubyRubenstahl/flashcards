<template>
     <q-expansion-item
      :icon="icon"
      :label="title"
      :caption="subtitle"
    >
      <slot>
      </slot>
     </q-expansion-item>
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
    subtitle:{
      type: String,
    },
    icon: {
      type: String,
      
    }
  }
}
</script>
