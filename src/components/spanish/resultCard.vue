<template>
    <!--
      A component to display the answer to a vocab question
      The submit button connects back up to the parent, so the parent can handle the logic of
      advancing to the next question
     -->
    <div>
        <b-card :header-bg-variant="variant" :border-variant="variant" :header="text">
            <b-card-text>
                <h1>{{ question }}  &#8594;  {{ answer }}</h1>
                <b-form @submit="nextBtn" class="mt-4">
                    <b-form-input v-if="!correct" class="mt-4 mb-4" :value="userAnswer" disabled></b-form-input>
                    <b-button type="submit" @click="nextBtn" ref="nextButton" :autofocus="true" block variant="primary">Next Question</b-button>
                </b-form>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>

export default {
  props: ['question', 'answer', 'userAnswer', 'correct', 'text', 'variant'],

  data () {
    return {

    }
  },
  methods: {
    nextBtn (event) {
      event.preventDefault()
      this.$emit('nextBtn')
    }
  },
  // I'm trying to make sure the next button is always in focus, so the user can just hit enter
  // to move on.  Not sure if there's a better way than this.
  mounted () {
    this.$nextTick(() => {
      this.$refs.nextButton.focus()
    })
  },
  components: {

  }
}
</script>

<style>

</style>
