<template>
    <b-container class="mt-3">
        <pageIntro :backImg="backgroundImg" :introTitle="title" :introText="text"></pageIntro>
        <postList :inputItems="data"></postList>
    </b-container>
</template>

<script>
import postList from './postList'
import pageIntro from './pageIntro'
import data from '../../public/json-files/seattle-maine-2013.json'

export default {
  data () {
    return {
      backgroundImg: '/img/background/seattleMaine2013.jpg',
      data,
      title: 'Biking from Seattle to Maine - 2013',
      text: 'This was my crazy summer of 2013.  First, I biked from Seattle to South Dakota.  Then, I hiked the remainder of the CDT (I started it in 2011).  Then I went back to South Dakota to finish biking to Maine.  Ridiculous.'
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
