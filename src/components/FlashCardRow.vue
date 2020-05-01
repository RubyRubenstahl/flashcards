<template>
  <div>
     
    <div v-if="value.component==='number'">{{value.prefix}}{{value.value}}</div>
    
    <hr v-if="value.component==='divider'" class="divider-line"/>
    
    <div v-if="value.component==='input'">
         {{value.prefix}}
      <input
        v-model="value.value"
        :placeholder="value.placeholder || '?'"
        class="input-row"
        :style="{width: String(value.expected).length + 'ch'}"
        @keypress.enter="$emit('submit')"
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
<style scoped>
.input-row{
    font-size: inherit;
    padding-left:16px;
}

.divider-line {
  font-size: 2;
  border: 4px solid #000000aa;
  margin: 0;
  padding: 0;
  margin-top: 10px;
}
</style>        
