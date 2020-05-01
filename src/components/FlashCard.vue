<template>
    <div class="flashcard">
        <div v-for="(line, index) in inputLines" :key="index">
            <div v-if="line.type==='value'">{{line.value}}</div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'FlashCard',
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


</style>
 
