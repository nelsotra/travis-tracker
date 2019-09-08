<template>
    <b-container class="mt-3">
        <pageIntro :backImg="backgroundImg" :introTitle="title" :introText="text"></pageIntro>
        <postList :inputItems="data"></postList>
    </b-container>
</template>

<script>
import postList from './postList'
import pageIntro from './pageIntro'
import data from '../../public/json-files/pct-2016.json'

export default {
  data () {
    return {
      backgroundImg: '/img/background/pct.jpg',
      data,
      title: 'PCT 2016!!!',
      text: 'I originally hiked the PCT in 2008, but it\'s always been my favorite adventure, so I\'ve wanted to redo it for quite awhile. 2016 turned out to be the year to do it. I\'m starting in March with just the southern section first (from Walker Pass to the Mexican border). Why? Because my one complaint about the PCT was the horrendous heat while trying to hike the desert, so this year I hope to hike the desert in March when it\'s hopefully a little more comfortable. Of course, there are still decent mountains to cross in southern California, and there\'s always the chance of a March blizzard to make my life interesting. Wish me luck!'
    }
  },
  components: {
    postList,
    pageIntro
  }
}
</script>

<style>

</style>
