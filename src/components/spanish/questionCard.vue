<template>
    <!--
      A component to display a vocab question to the user
      The submit button sends the user's answer back to the parent, so the parent can handle the
      logic of determining if it is right/wrong and the next steps.
     -->
    <div>
        <b-card >
            <b-card-text>
                <h1>{{ question }}</h1>
                <b-form @submit="answerBtn">
                    <b-form-input :autofocus="true" ref="userInput" class="mt-4 mb-4" v-model="userAnswer" placeholder="Translation"></b-form-input>
                    <b-button type="submit" @click="answerBtn" block variant="primary" :disabled="userAnswer.length == 0">Check Answer</b-button>
                </b-form>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>

export default {
  props: ['question'],

  data () {
    return {
      userAnswer: ''
    }
  },
  methods: {
    answerBtn (event) {
      event.preventDefault()
      this.$emit('answerBtn', this.userAnswer)
    }
  },
  // I want the input field to always be in focus so the user can just type without have to click
  // on it.  Not sure if there's a better way than this.
  mounted () {
    this.$nextTick(() => {
      this.$refs.userInput.focus()
    })
  },
  components: {

  }
}
</script>

<style>

</style>
