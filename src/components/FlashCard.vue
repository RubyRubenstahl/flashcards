<template>

  <div class="container">
    <transition name="fade">
      <div
        v-if="card.side==='correct'"
        class="flashcard"
      >
      Yep</div>
    </transition>
    <transition name="fade">

      <div
        v-if="card.side==='incorrect'"
        class="flashcard"
      >Nopes</div>
    </transition>
    <transition name="fade">

      <div
        v-if="card.side==='question'"
        class="flashcard flashcard-front"
      >
        <form @submit.prevent="checkAnswer">
          <div
            v-for="(row, index) in card.rows"
            :key="index"
          >
            <FlashCardRow v-model="card.rows[index]"/>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>
<script>
  import FlashCardRow from './FlashCardRow'
  export default {
    name: 'FlashCard',
    components: { FlashCardRow },
    data () {
      return {
       card:{
           rows:[
               {component: 'number', value: 4},
               {component: 'input', type: Number, prefix:'+', placeholder: '?', expected: 4},
               {component: 'divider'},
               {component: 'number', value: 4}
               ],
           side: 'question'
       }
      }
    },
    methods: {
      inputLineChanged (e) {
        this.inputs[e.name] = e;
      },
      answerLineChanged (e) {
        this.inputs.aswerLine = e;
      },
      checkAnswer () {
        console.log('You answered')
        this.side = 'correct'
      }
    },
    props: {
    
    }
  }
</script>
<style scoped>
.container{
    position:fixed;
    top:1in;
}
.flashcard {
    position:fixed;
  width: 3in;
  height: 5in;
  box-shadow: 5px 5px 12px #00000088;
  background-color: white;
  border-radius: 12px;
  padding: 0.5in;

  font-size: 1.5in;
  text-align: right;
}

.check-answer {
  background-color: green;
  border: none;
  color: white;
  padding: 8px;
  border-radius: 12px;
  font-size: 0.3in;
  margin-top: 32px;
  width: 3in;
  height: 1in;
}

.divider-line {
  font-size: 2;
  border: 4px solid #000000aa;
  margin: 0;
  padding: 0;
  margin-top: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}


.fade-leave{
     transform: rotatey(0deg)
}

.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
     transform: rotatey(90deg)
}

.fade-enter /* .fade-leave-active below version 2.1.8 */ {
     transform: rotatey(-90deg)
}
.fade-enter-to /* .fade-leave-active below version 2.1.8 */ {
     transform: rotatey(0deg)
}



.flashcard{
}
</style>
 
