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
import data from '../../public/json-files/at-2016.json'
import TrackerHeader from './header'

export default {
  data () {
    return {
      backgroundImg: '/img/background/tent.jpg',
      data,
      title: 'AT 2016!!!',
      text: 'The plan was to hike the southern portion of the PCT and then pop over to hike the AT. Well, that partially happened. I hiked about 200 miles of the PCT, broke a tooth, ended up in San Diego, and decided to just say f*&^ it and head east. Was this a good decision? Who knows. All I know is that I\'m definitely taking a much more relaxed attitude to my hiking than the last time around. Basically, whatever happens, happens.'
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
