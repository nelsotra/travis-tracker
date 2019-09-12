<template>
    <b-container class="mt-3">
        <pageIntro :backImg="backgroundImg" :introTitle="title" :introText="text"></pageIntro>
        <postList :inputItems="data"></postList>
    </b-container>
</template>

<script>
import postList from './postList'
import pageIntro from './pageIntro'
import data from '../../public/json-files/breck-seattle-2011.json'

export default {
  data () {
    return {
      backgroundImg: '/img/background/breckSeattle2011.jpg',
      data,
      title: 'Biking from Breckenridge CO to Seattle - 2011',
      text: 'This bike ride was never supposed to happen.  In 2011 I was hiking the CDT.  I had started the CDT in New Mexico and everything was going fine until I hit a wall of snow in Colorado (2011 was a record-breaking snow year).  Sadly, I couldn\'t safely go on with the hike.  Afterwards, I was sitting around sad and depressed at my sisters house, kicking myself over my failed CDT hike when an idea hit me:  why not try cross-country biking?  I had been wanting to do it for some time, and I obviously had all of the camping equipment, I even had an old bike sitting in the garage.  Sure, it wasn\'t the best bike for the purpose, but it had wheels and handlebars, I figured it would work just fine.  So that was that.  I borrowed some paniers from a friend (the bags on the rack over the bike\'s rear wheel), got some maps, and headed out to bike from Breckenridge Colorado to Seattle.  A new adventure began from the ashes of a failed one.'
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
