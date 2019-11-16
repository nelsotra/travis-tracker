<template>
    <div>
    <TrackerHeader />
    <b-container class="mt-3">
        <pageIntro :backImg="backgroundImg" :introTitle="title" :introText="text"></pageIntro>
        <postList :inputItems="data"></postList>
    </b-container>
    </div>
</template>

<script>
import postList from './postList'
import pageIntro from './pageIntro'
import data from '../../public/json-files/cdt-2011.json'
import TrackerHeader from './header'

export default {
  data () {
    return {
      backgroundImg: '/img/background/cdt2011.jpg',
      data,
      title: 'The Southern Continental Divide Trail (CDT) - 2011',
      text: '2011 was supposed to be the year that I finished the Triple Crown.  The Triple Crown is what we call the 3 big North-South hiking trails in the US:  The Appalachian Trail (AT), the Pacific Crest Trail (PCT), and the Continental Divide Trail (CDT).  Not very many people have done all 3, the count might be a few hundred at this point, it\'s a fairly exclusive club, and I had planned to become a member of that club in 2011.  Mother Nature had other plans.  2011 turned out to be a HUGE snow year, like record-breaking snow levels.  I made it through New Mexico and part of Colorado, but then my dreams were dashed by the walls of snow ahead of me.  It was horribly depressing, and I took my failure pretty hard, but luckily, something good came of it...'
    }
  },
  components: {
    postList,
    pageIntro,
    TrackerHeader
  }
}
</script>

<style>
.specialCard {
  opacity: .8;
}
</style>
