<template>
    <!--
      This component receives an array of spanish/english words and displays them one at a time
      to the user, while also tracking ones that were incorrect
     -->
    <div>
        <div class="m-5" v-if="!done">
            <b-container fluid class="mt-3" cols="4">
            <b-row>
            <b-col md="2"></b-col>
            <b-col md="8">
                <progressCard :text="message" :depth="recursionDepth" :index="currentIndex" :maxIndex="maxIndex" :correct="numberCorrect" :wrong="numberWrong"/>

                <!-- the first time a question is displayed, this div should be shown -->
                <div v-if="attempted === false" v-bind:key="currentIndex">
                    <questionCard @answerBtn="checkAnswer" :question="question" />
                </div>

                <!-- after the user tries to answer, this one will show the results (correct/incorrect) -->
                <div v-if="attempted === true" v-bind:key="currentIndex">
                    <resultCard @nextBtn="incrementIndex" :correct="correct" :question="question" :answer="answer" :userAnswer="userAnswer" :text="displayText" :variant="displayVariant" />
                </div>

            </b-col>
            <b-col md="2"></b-col>
            </b-row>
            </b-container>
        </div>

        <!-- Once we've gone through the entire list, if there are any items that were incorrect and
            therefore in the redoArray, we'll recursively call vocabTest until the redoArray is empty
            Otherwise, just show a little message to the user and let them pick a new list. -->
        <div v-if="done">
            <vocabTest v-if="redoArray.length > 0" :vocabList="redoArray" text="Retrying the incorrect questions" :depth="recursionDepth+1" />
            <doneCard v-else />
        </div>
    </div>
</template>

<script>
import doneCard from './doneCard'
import progressCard from './progressCard'
import questionCard from './questionCard'
import resultCard from './resultCard'

export default {
  props: ['vocabList', 'text', 'depth'],
  name: 'vocabTest',
  components: {
    doneCard,
    progressCard,
    questionCard,
    resultCard
  },

  data () {
    return {
      vocabArray: this.vocabList,
      message: this.text,
      recursionDepth: +this.depth,
      redoArray: [],
      currentIndex: 0,
      maxIndex: 0,
      question: '',
      answer: '',
      attempted: false,
      userAnswer: '',
      correct: false,
      numberCorrect: 0,
      numberWrong: 0,
      displayVariant: 'success',
      displayText: 'Correct!!',
      done: false
    }
  },

  // I needed a way to set the initial question the user sees when the component gets new data
  // so I'm using the mounted function to reset everything as needed.  Is there a better way?
  mounted () {
    this.resetAll()
  },
  methods: {
    // When the user hits the next question button, this gets called to bring up the next question
    // Once we've hit the end of the array, done is set to true, and the vocabTestRedo component is called
    incrementIndex () {
      // event.preventDefault()
      if (this.currentIndex < this.maxIndex) {
        this.currentIndex += 1
        this.resetValues()
        this.getValues()
      } else {
        this.done = true
      }
    },

    // The answer (msg) comes from a component, so we set this.userAnswer to it and then check to
    // so if they user was correct, if not, have to set a bunch of style properties and save the
    // item in the redo array so we can have the user try again later.
    checkAnswer (msg) {
      this.userAnswer = msg
      this.attempted = true

      // There are potentially several options for a single word, so I have them separated by a comma,
      // then, split on the comma to get them into an array, and search the array for the user's answer.
      // I orginally just did a substring find, but then you would get a false positive if you're answer
      // was just part of the correct one, i.e. 'the' would match 'the dog', which is not great.  This
      // way works much better.
      const answerArray = this.answer.trim().toLowerCase().split(' | ')
      if (answerArray.includes(msg.trim().toLowerCase())) {
        this.correct = true
        this.numberCorrect += 1
      } else {
        this.correct = false
        this.numberWrong += 1
        this.displayVariant = 'danger'
        this.displayText = 'Wrong Answer'
        const tmpRedo = [...this.redoArray, this.vocabArray[this.currentIndex]]
        this.redoArray = tmpRedo
      }
    },

    // A method to update the UI with wherever we are currently in the vocab array
    getValues () {
      if (this.currentIndex < this.vocabArray.length) {
        this.question = this.vocabArray[this.currentIndex][0]
        this.answer = this.vocabArray[this.currentIndex][1]
      } else {
        this.question = ''
        this.answer = ''
      }
    },

    // This is basically used to reset the values when a new question is asked
    resetValues () {
      this.attempted = false
      this.correct = false
      this.userAnswer = ''
      this.displayVariant = 'success'
      this.displayText = 'Correct!!'
    },

    // This is used to reset everything, like when new data is passed to the component
    resetAll () {
      this.currentIndex = 0
      this.numberCorrect = 0
      this.numberWrong = 0
      this.maxIndex = Math.min(100, Math.max(0, this.vocabArray.length - 1))
      this.resetValues()
      this.getValues()
    }
  }
}
</script>

<style>

</style>
