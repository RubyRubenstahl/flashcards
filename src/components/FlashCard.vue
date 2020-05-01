<template>

  <div
    class="container"
    ref="container"
  >
    {{completed}}
    <div
      
      class="flashcard flashcard-back"
      :style="{backgroundImage: `radial-gradient(#00000022, #00000055), url(https://loremflickr.com/300/600/cute,puppy,wolf?random=${cacheBuster})`}"
    >

      Correct!
      <button @click="createNewCard">Next</button>

    </div>
    <div
      v-if="!isCorrect"
      class="flashcard flashcard-back incorrect-text"
      :style="{backgroundImage: `radial-gradient(#00000044, #00000088), url(https://loremflickr.com/300/600/graveyard,creepy?random=${cacheBuster})`}"
    >
      Failure
      <button
        @click="tryAgain"
        style="position:relative;top:50px"
      >Try Again</button>

    </div>

    <div
      v-if="side==='question'"
      class="flashcard flashcard-front"
    >
      <form
        @submit.prevent="checkAnswer"
        ref="form"
      >
        <div
          v-for="(row, index) in card.rows"
          :key="index"
        >
          <FlashCardRow
            v-model="card.rows[index]"
            @submit="checkAnswer"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import FlashCardRow from './FlashCardRow'



  const createTenFactCard = () => {
    const firstAddend = Math.round(Math.random() * 10)
    return {
      rows: [
        { component: 'number', value: firstAddend },
        { component: 'input', type: Number, prefix: '+', expected: 10 - firstAddend },
        { component: 'divider' },
        { component: 'number', value: 10 },
      ]
    }
  }


  export default {
    name: 'FlashCard',
    components: { FlashCardRow },
    data () {
      return {
        card: createTenFactCard(),
        side: 'question',
        completed: 0,
        cacheBuster: null
      }
    },
    computed: {
      isCorrect () {
        const isCorrect = this.card.rows.
          filter(row => row.component === 'input')
          .reduce((isCorrect, input) => {
            if (input.expected === undefined) return true;
            return isCorrect && input.type(input.value) === input.expected;
          }, true);

        return isCorrect
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
        this.side = 'answer';

        if (this.isCorrect) {
          this.completed++;
        }
      },
      tryAgain () {
        this.side = 'question';
        this.card.rows = this.card.rows.map(row => row.component === 'input' ? { ...row, value: undefined } : row)
      },
      createNewCard () {
        this.card = createTenFactCard();
        this.side = 'question';
      }
    },
    props: {

    },
    watch: {

      side: {
        immediate: true,
        handler (newVal) {
          if (newVal === 'answer') {
            console.log(this.cacheBuster)
            this.cacheBuster = Math.round(Math.random() * 1000)
          }else{
            this.cacheBuster=1
          }
        }      
        }

    }
  }
</script>
<style scoped>
.container {
  position: fixed;
  top: 1in;
}
.flashcard {
  position: fixed;
  box-sizing: content-box;
  width: 3in;
  height: 5in;
  box-shadow: 5px 5px 12px #00000088;
  background-color: white;
  border-radius: 12px;
  padding: 0.5in;

  font-size: 1.3in;
}

.incorrect-text {
  color: #ffafaf;

  text-shadow: 0 0 26px #f00;
}

.flashcard-back {
  background-size: contain,cover;
  /* background-position: center; */
  color: white;
  font-size: 0.8in;
  text-align: center;
}

button {
  font-size: 0.3in;
  border-radius: 10px;
  border: none;
  padding: 12px;
  background-color: #629bb9bd;
  color: #ffffffbd;
  width: 200px;
}

.flashcard-front {
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

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-leave {
  transform: rotatey(0deg);
}

.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: rotatey(90deg);
}

.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  transform: rotatey(-90deg);
}
.fade-enter-to /* .fade-leave-active below version 2.1.8 */ {
  transform: rotatey(0deg);
}

.flashcard {
}
</style>
 
