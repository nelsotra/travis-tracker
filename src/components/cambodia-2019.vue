<template>
    <b-container class="mt-3">
        <pageIntro :backImg="backgroundImg" :introTitle="title" :introText="text"></pageIntro>
        <postList :inputItems="data"></postList>
    </b-container>
</template>

<script>
import postList from './postList'
import pageIntro from './pageIntro'
import data from '../../public/json-files/cambodia-2019.json'

export default {
  data () {
    return {
      backgroundImg: '/img/background/cambodia.jpg',
      data,
      title: 'Cambodia 2019!!!',
      text: 'It was time to check something off of my bucket list:  Angkor Wat.  I\'ve wanted to see it for years, and I finally decided to just suck it up, buy a ticket, and go.  I\'m so glad that I did, Angkor Wat is incredible, and I got to see Hong Kong on the way, which is an amazing city.  I even spent a day in Bangkok, which is not an amazing city, but I\'m still glad that I went.  Overall it was a lovely trip, even if it wasn\'t a typical Travis-Adventure that requires weeks of hiking hundreds of miles, it was still fun.'
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
