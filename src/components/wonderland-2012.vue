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
import data from '../../public/json-files/wonderland-2012.json'
import TrackerHeader from './header'

export default {
  data () {
    return {
      backgroundImg: '/img/background/wonderland.jpg',
      data,
      title: 'Wonderland Trail 2012',
      text: 'The Wonderland is a trail that goes around Mt. Rainier in Washington state.  It\'s a really really pretty trail and it might sound easy at a mere 93 miles in length, but it is a LOT of up and down.  The other downside to this trail is that you have to apply for a permit to hike it and can only camp at designated sites.  Yeah, it sucks, but it\'s worth it, this trail is magnificent!  This is actually my second time on Wonderland.  The first was my very first backpacking trip ever with Rachel, Marilyn, and Karen.  We got rained out and had to bail on the trip, but that one adventure quite possibly set in motion events that would change my life forever and turn me into the crazy thru-hiker that I am today.  So thank you Wonderland, you will always be my special trail.'
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
