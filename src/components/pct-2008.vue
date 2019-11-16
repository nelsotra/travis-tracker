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
import data from '../../public/json-files/pct-2008.json'
import TrackerHeader from './header'

export default {
  data () {
    return {
      backgroundImg: '/img/background/pct2008.jpg',
      data,
      title: 'PCT 2008!',
      text: "My second thru-hike, the Pacific Crest Trail, in 2008.  I'd like to say that I knew what I was doing after I hiked the AT, but I think we all know that's not true.  I loved the PCT though, it's the perfect combination of reasonable hiking trail (meaning: not too steep/rocky, and well-marked enough to make getting lost difficult, but not impossible) while still having some absolutely stunning scenery.  Yes, the PCT is my favorite of the big 3, it's hard to beat this trail.  If you can survive the southern California desert, the rest is simply amazing."
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
