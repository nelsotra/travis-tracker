<template>
    <!--
      A component to display the user's progress (# correct, incorrect, etc)
     -->
    <div>
        <div class="ml-3 mb-2" style="color: red;">
            <h5>{{ text }} {{ depth ? ' - # ' + depth : ''}}</h5>
        </div>
        <div class="ml-3 mb-3">
            <span><strong>Progress: </strong> {{ index + 1 }} / {{ maxIndex + 1 }}</span><br/>
            <span><strong>Correct: </strong>{{ correct }}</span><br />
            <span><strong>Incorrect: </strong>{{ wrong }}</span>
        </div>
    </div>
</template>

<script>

export default {
  props: ['text', 'depth', 'index', 'maxIndex', 'correct', 'wrong'],

  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style>

</style>
