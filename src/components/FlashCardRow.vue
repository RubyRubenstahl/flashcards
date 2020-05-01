<template>
  <div>

    <div v-if="value.component==='number'">{{value.prefix}}{{value.value}}</div>

    <hr
      v-if="value.component==='divider'"
      class="divider-line"
    />

    <div v-if="value.component==='input'" style="display:flex;justify-content: flex-end">
      {{value.prefix}}
      <input
        v-model="value.value"
        :placeholder="value.placeholder || '?'"
        class="input-row"
        :style="{width: String(value.expected).length+1 + 'ch'}"
        @keypress.enter="$emit('submit')"
        ref="input"
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
    },
    watch:{
      value:{
        deep:true,
        immediate:true,
        handler(val){
          this.$nextTick(()=>{
          if(val.autofocus){
            this.$refs.input.focus();
          }
          })
        }
      }
    }
  }
</script>
<style scoped>
.input-row {
  font-size: inherit;
  padding-left: 16px;
  text-align: right;

  border: none;
  color: #00000088;
  background-color: #00000008;
  padding: 5px;
  padding-top: 0px;
  padding-left: 18px;
  border-radius: 15px;
}

.divider-line {
  font-size: 2;
  border: 4px solid #000000aa;
  margin: 0;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>        
