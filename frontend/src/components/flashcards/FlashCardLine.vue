<template>
    <div>
    <div v-if="value.type==='value'">{{value.value}}</div>
    <div v-if="value.type==='input'">
        <input v-model="value.value" @input="checkAnswer" autofocus class="input-line" placeholder="?"/>
    </div>
    </div>
</template>
<script>
export default {
    name: "FlashCardLine",
    data() {
        return {
            inputVal: null
        }

    },
    props:{
        value:{
            type: Object,
            required: true
        }
    },
    methods:{
        checkAnswer(e){
           const isCorrect =e.target.value===String(this.value.expected)
           console.log(isCorrect)
           this.$emit('change', {...this.value, isCorrect})
           
           
           
        }
    }
}
</script>
    
<style scoped>
    .input-line{
        border:none;
        outline:none;
        font-size:inherit;
        width: 3ch;
        text-align: right;
        color: #00000077; 
        border-radius: 20px;
    }
</style>