<template>
    <b-container class="mt-3">
        <pageIntro :backImg="backgroundImg" :introTitle="title" :introText="text"></pageIntro>
        <postList :inputItems="data"></postList>
    </b-container>
</template>

<script>
import postList from './postList'
import pageIntro from './pageIntro'
import data from '../../public/json-files/iceland-2016.json'

export default {
  data () {
    return {
      backgroundImg: '/img/background/iceland.jpg',
      data,
      title: 'Iceland 2016!!!',
      text: 'I decided that one thru-hike a year was way more than enough, so instead of doing another hike after the AT, I decided to go biking. The only question was: Where to go? All of the rides that I wanted to do (finishing the TransAmerica Trail, biking across the Southern US, etc) all sounded pretty horrible in July/August, so instead I decided to go a little farther north. Iceland looks like an amazingly beautiful place and July is a perfect month to visit, so I thought why not? Let\'s do Iceland!'
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
