<template>
    <b-container class="mt-3">
        <pageIntro :backImg="backgroundImg" :introTitle="title" :introText="text"></pageIntro>
        <postList :inputItems="data"></postList>
    </b-container>
</template>

<script>
import postList from './postList'
import pageIntro from './pageIntro'
import data from '../../public/json-files/camino-2019.json'

export default {
  data () {
    return {
      backgroundImg: '/img/background/camino.png',
      data,
      title: 'Camino de Santiago 2019',
      text: 'I needed a vacation, but I\'m still working, so it needed to be something that could be done in a relatively short amount of time.  The Camino is perfect for that.  It\'s a pilgrimage trail in Spain.  ~450 miles, pretty Spanish country side, neat Spanish towns, good Spanish food, best of all - it draws an eclectic mix of people from all over the world.  It\'s time to hike the Camino.'
    }
  },
  components: {
    postList,
    pageIntro
  }
}
</script>

<style>
.specialCard {
  opacity: .8;
}
</style>
