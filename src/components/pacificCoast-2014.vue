<template>
    <div>
    <TrackerHeader />
    <b-container class="mt-3">
        <pageIntro :backImg="backgroundImg" :introTitle="title" :introText="text"></pageIntro>
        <postList inputFile='/pacificCoast-2014.json' :inputItems="data"></postList>
    </b-container>
    </div>
</template>

<script>
import postList from './postList'
import pageIntro from './pageIntro'
import data from '../../public/json-files/pacificCoast-2014.json'
import TrackerHeader from './header'

export default {
  data () {
    return {
      backgroundImg: '/img/background/pacific.jpg',
      data,
      title: 'Pacific Coast 2014!!!',
      text: 'I had biked from Seattle to Florence, OR during my crazy summer of 2013, and I decided that it was time to go back and finish the rest of the Pacific Coast.  The coast did not disappoint, it turned out to be one of the most stunning and amazing rides that I have ever done.'
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
