<template>
    <!--
      This is a generic component to display the info for each adventure
      It takes the background image, title, text, and data that is passed into it
      and displays to via more components.

      Originally, I had each adventure on its own separate page, because I envisioned
      customizing each one and adding extra content, but of course that never happened,
      so I moved to this system of having a single component and greatly simplified the
      file structure.
     -->
    <div>
    <b-container class="mt-3">
      <postList class="mb-3" :inputItems="data"></postList>
      <pageIntro class="mb-3" :backImg="backgroundImg" :introTitle="title" :introText="text"></pageIntro>
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
