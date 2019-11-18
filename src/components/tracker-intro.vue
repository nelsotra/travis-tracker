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

          <b-collapse id="accordion-1" accordion="intro-accordion">
            <b-card>Sometimes I hike or bike thousands of miles for no apparent reason.  This site lets my friends/family follow me as I stumble along.</b-card>
          </b-collapse>
          <b-collapse id="accordion-2" accordion="intro-accordion">
            <b-card>Pick an adventure...  Follow along...  Go out and have your own adventure...</b-card>
          </b-collapse>
          <b-collapse id="accordion-3" accordion="intro-accordion">
            <b-card class="text-left">
              <b-card-body>
                <ul>
                  <li><b><i>Camino de Santiago 2019</i></b></li>
                      <ul><li>2 weeks of hiking the Camino de Santiago in Spain</li></ul>
                  <li><b><i>Peru/Beijing/Cambodia 2017-2019</i></b></li>
                      <ul>
                          <li>Instead of doing big, thousand mile hikes and bikes, the last couple of years I've done smaller, international adventures.</li>
                          <li>It started with going to Peru to see Machu Picchu and Choquequirao, then a last-minute vacay to Beijing, and then a bucket-list trip to see Angkor Wat in Cambodia</li>
                      </ul>
                  <li><b><i>AT 2016</i></b></li>
                      <ul><li>Hiked the entire Appalachian Trail in 2016! </li></ul>
                  <li><b><i>PCT 2016</i></b> </li>
                      <ul><li>Only did about a week on the PCT in late winter 2016, mostly as a warm-up for the AT.  I meant to go back after the AT, but never did :( </li></ul>
                  <li><b><i>Iceland 2016</i></b></li>
                      <ul><li>After hiking the AT I was pretty much over hiking, but I still wanted to adventure, so I grabbed my bike and went to Iceland</li></ul>
                  <li><b><i>Korea/Japan 2015</i></b></li>
                      <ul><li>Korea and Japan were a single 3-week trip in 2015.  I started in Korea and ended in Japan.  It was amazing, I want to go back</li></ul>
                  <li><b><i>Pacific Coast 2014</i></b></li>
                      <ul><li>Biking down the Pacific Coast of the US is one of the most gorgeous bike rides that I've ever done</li></ul>
                  <li><b><i>Nothern CDT 2013</i></b></li>
                      <ul><li>An attempt to collect my Triple Crown and hike the CDT.  It DID go well!</li></ul>
                  <li><b><i>Seattle to Maine 2013</i></b></li>
                      <ul><li>Biked from Seattle to Maine.  The long, northern route across country.</li></ul>
                  <li><b><i>Wonderland Trail 2012</i></b></li>
                      <ul><li>Hiked the entire Wonderland Trail in 2012.  This would have been after the AT, PCT, and half of the CDT. </li></ul>
                  <li><b><i>Breck CO to Seattle 2011</i></b></li>
                      <ul><li>After my failed CDT attempt, I decided to pick up an old bike, start riding west, and see where I got.  This was that trip, and from it was born a new love of long-distance bike touring</li></ul>
                  <li><b><i>Southern CDT 2011</i></b></li>
                      <ul><li>An attempt to collect my Triple Crown and hike the CDT.  It did not go well.</li></ul>
                  <li><b><i>PCT 2008</i></b></li>
                      <ul><li>My second thru-hike, the amazing PCT.  Still my favorite of them all.</li></ul>
                  <li><b><i>AT 2005</i></b></li>
                      <ul><li>My very first thru-hike, the Appalachian Trail.  This is the one that started it all...</li></ul>
                </ul>
              </b-card-body>
            </b-card>
          </b-collapse>
          <b-collapse id="accordion-4" accordion="intro-accordion">
            <b-card>
              <b-card-body>
                <h3>Nothing planned :(</h3>
                <b-card-text>
                  I recently hiked the Camino de Santiago, which I really enjoyed!
                  <br>
                  But after the end of an adventure, I'm always asking myself: "What's next?"
                  <br>
                  The Middle East?  Climb Kilimanjaro? Hike New Zealand? Take the cheapest flight I can find to wherever it goes?
                </b-card-text>
                <b-card-text>
                  I guess we'll find out what it ends up being eventually...
                </b-card-text>
              </b-card-body>
            </b-card>
          </b-collapse>
      </div>

      <div class="customBackground pb-5 pt-3" :style="{ backgroundImage: `url('${backgroundImg}')` }"></div>

    </div>
</template>

<script>

export default {
  name: 'TrackerHome',
  data () {
    return {
      backgroundImg: process.env.BASE_URL + '/img/background/winds_wrong_pass.jpg'
    }
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
