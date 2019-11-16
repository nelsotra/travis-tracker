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
import data from '../../public/json-files/beijing-2018.json'
import TrackerHeader from './header'

export default {
  data () {
    return {
      backgroundImg: '/img/background/beijing.jpg',
      data,
      title: 'Beijing 2018!!!',
      text: 'This was a totally spontaneous trip.  I found a super-cheap last-minute flight to Beijing, so I took it.  I think I literally bought the ticket on a Monday and flew out on Wednesday.  That\'s my kind of adventure.  That also means that I had zero time to research the trip, so I went to a bookstore (yes, they still exist!), bought a Beijing guide book, and read it on the plane.  I guess it all worked out.'
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

</style>
