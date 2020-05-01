<template>
  <div>
    <div v-if="value.component==='number'">{{value.prefix}}{{value.value}}</div>
    <div v-if="value.component==='input'">
        {{value.prefix}}
      <input
        v-model="value.value"
        :placeholder="value.placeholder | '?'"
      />
    </div>
  </div>
</template>
<script>
  export default {
    name: "FlashCardRow",
    props: {
      value: {
        type: Object,
        required: true
      }
    }
  }
</script>
    
