<template>
    <b-container class="mt-3">
        <pageIntro :backImg="backgroundImg" :introTitle="title" :introText="text"></pageIntro>
        <postList :inputItems="data"></postList>
    </b-container>
</template>

<script>
import postList from './postList'
import pageIntro from './pageIntro'
import data from '../../public/json-files/peru-2017.json'

export default {
  data () {
    return {
      backgroundImg: '/img/background/peru.jpg',
      data,
      title: 'Peru 2017!!!',
      text: 'My 40th birthday was coming up fast so I decided it to go on an adventure to celebrate.  After going back and forth between different options, I finally decided on Peru and hiking Machu Picchu!  Unfortunately, you have to book the actual Inca Trail hike to MP like 6 months in advance.  I don\'t do anything 6 months in advance, so I did the regular ole tourist thing and took the train there.  But I still wanted to hike!  Luckily, I found another site that was supposed to be similar to MP but muuuuuuch less touristy, because the only way to get there is a grueling 4-day hike.  There are no trains.  No roads.  I suppose you could helicopter yourself there, but I don\'t know how many people would do that.  No, you must hike.  Therefore, I had the entire place to myself and loved every second of it.  It\'s name:  Choquequirao'
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
