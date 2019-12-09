<template>
    <!--
      A generic component to display a vocab question in a card to the user
     -->
    <div>
    <b-container class="mt-3">
      <b-card >
          <b-card-text>
              <h1>{{ question1 }}</h1>
              <h3>{{ answer1 }}</h3>
              <b-button block variant="primary" v-on:click="$emit('increment-btn')">Check Answer</b-button>
          </b-card-text>
      </b-card>
    </b-container>
    </div>
</template>

<script>

export default {
  props: ['question', 'answer'],

  data () {
    return {
      question1: this.question,
      answer1: this.answer
    }
  },
  components: {

  }
}
</script>

<style>

</style>
