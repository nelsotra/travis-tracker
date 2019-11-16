<template>
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
