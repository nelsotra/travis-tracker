<template>
    <div>
    <b-container class="mt-3">
        <pageIntro :backImg="backgroundImg" :introTitle="title" :introText="text"></pageIntro>
        <postList :inputItems="data"></postList>
    </b-container>
    </div>
</template>

<script>
import postList from './postList'
import pageIntro from './pageIntro'

export default {
  props: ['advBackground', 'advTitle', 'advText', 'dataFile'],

  data () {
    return {
      backgroundImg: this.advBackground,
      data: this.dataFile,
      title: this.advTitle,
      text: this.advText
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
