<template>
    <!--
      This is a component for the main tracker page (different from the page for an adventure)
      Since it had some custom features from a page for an adventure, I created a new component
      for it.
      All it does is display some accordion buttons with some helpful text and then an image
    -->
    <div class="changeBackground">

      <div class="text-center">
          <div>
            <b-button-group size="lg" class="mb-3">
              <b-button v-b-toggle.accordion-1 class="mr-2" variant="outline-primary">Why I made this</b-button>
              <b-button v-b-toggle.accordion-2 class="mr-2" variant="outline-primary">How to use</b-button>
              <b-button v-b-toggle.accordion-3 class="mr-2" variant="outline-primary">What I've already done</b-button>
              <b-button v-b-toggle.accordion-4 class="mr-2" variant="outline-primary">What's next</b-button>
            </b-button-group>
          </div>

          <genericBlock collapseID='accordion-1' accordionID='intro-accordion'>
            Sometimes I hike or bike thousands of miles for no apparent reason.  This site lets my friends/family follow me as I stumble along.
          </genericBlock>

          <genericBlock collapseID='accordion-2' accordionID='intro-accordion'>
            Pick an adventure...  Follow along...  Go out and have your own adventure...
          </genericBlock>

          <previousBlock collapseID='accordion-3' accordionID='intro-accordion' />

          <nextBlock collapseID='accordion-4' accordionID='intro-accordion' />
      </div>

      <div class="customBackground pb-5 pt-3" :style="{ backgroundImage: `url('${backgroundImg}')` }"></div>

    </div>
</template>

<script>
import genericBlock from './introBlocks/genericBlock'
import nextBlock from './introBlocks/nextBlock'
import previousBlock from './introBlocks/previousBlock'

export default {
  name: 'TrackerHome',
  data () {
    return {
      backgroundImg: process.env.BASE_URL + '/img/background/winds_wrong_pass.jpg'
    }
  },
  components: {
    genericBlock,
    nextBlock,
    previousBlock
  },
  methods: {

  }
}
</script>

<style>
.customBackground {
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  border: 1px solid silver;
}

.changeBackground {
  background-color: white;
}

</style>
