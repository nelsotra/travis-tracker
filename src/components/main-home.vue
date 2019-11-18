<template>
    <!--
      The main landing page for the site.
      Currently there are only 2 options: go to the portfolio or the tracker

      The jumboCard is a custom component for displaying the links
    -->
    <div>
        <jumboCard titleText="Work Portfolio" pageLink="/portfoliohome"></jumboCard>
        <jumboCard titleText="The Travis Tracker" pageLink="/trackerhome"></jumboCard>
    </div>
</template>

<script>
import jumboCard from './jumboCard'

export default {
  name: 'MainHome',
  components: {
    jumboCard
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
