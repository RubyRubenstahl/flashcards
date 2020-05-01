<template>
    <div class="flashcard">
        <div v-for="(line, index) in inputLines" :key="index">
            <FlashCardLine :line="line" @change=""/>
        </div>
        <hr class="divider-line">
            <FlashCardLine :line="answerLine"/>
    </div>
</template>
<script>
import FlashCardLine from './FlashCardLine'
export default {
    name: 'FlashCard',
    components:{FlashCardLine},
    data(){
        return {
            inputs:{}
        }
    },
    props: {
        inputLines:{
            type: Array,
            required: true
        },
        answerLine:{
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
    .flashcard{
       width: 3in;
       height:5in;
       box-shadow: 5px 5px 12px #00000088; 
       background-color: white;
       border-radius: 12px;
       padding: 0.5in;

       font-size:1.5in;
       text-align: right;
    }


    .divider-line{
        font-size:2;
        border: 4px solid #000000AA;
        margin:0;
        padding:0;
        margin-top:10px;
    }

</style>
 
