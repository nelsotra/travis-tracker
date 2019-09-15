<template>
    <b-container class="mt-3">
        <pageIntro :backImg="backgroundImg" :introTitle="title" :introText="text"></pageIntro>
        <postList :inputItems="data"></postList>
    </b-container>
</template>

<script>
import postList from './postList'
import pageIntro from './pageIntro'
import data from '../../public/json-files/cdt-2013.json'

export default {
  data () {
    return {
      backgroundImg: '/img/background/cdt2013.jpg',
      data,
      title: 'The Northern Continental Divide Trail (CDT) - 2013',
      text: '2013 was my crazy summer of fun.  I decided that it was time to finish what I started in 2011 and complete the CDT.  However, hiking only 1/2 of a major trail didn\'t seem like quite enough, so I also planned a cross-country bike tour from Seattle to Maine.  Let the craziness begin.'
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
