<template>
    <!--
      The main landing page for the site.
      Currently there are only 3 options: go to the portfolio, the tracker, or the spanish review page

      The jumboCard is a custom component for displaying the links
    -->
    <div>
        <jumboCard titleText="The Travis Tracker" pageLink="/trackerhome"></jumboCard>
        <jumboCard titleText="Work Portfolio" pageLink="/portfoliohome"></jumboCard>
        <jumboCard titleText="Spanish Vocab Review" pageLink="/spanishhome"></jumboCard>
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
