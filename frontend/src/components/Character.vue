<template>
  <img class="q-pr-xl" height="400px" :src="imageUrl" :alt="`Female woman. Pose: ${pose}`"/>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  props:{
    pose:{
      type: String,
      required: true
    }
  },
  computed:{
    imageUrl(){
      return  `statics/ui_character/${this.pose}.svg`
    }
  }
}
</script>
