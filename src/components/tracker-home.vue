<template>
    <div class="changeBackground">
    <TrackerHeader />
    <div class="customBackground pb-5 pt-3" :style="{ backgroundImage: `url('${backgroundImg}')` }"></div>

    <b-container >
      <b-row>
        <b-col cols="12">
          <b-card no-body class="mt-3 border-0 text-center">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="outline-secondary">What's the point of the Travis-Tracker?</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>Sometimes I hike or bike thousands of miles for no apparent reason.  This site lets my friends/family follow me as I stumble along.</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <b-card no-body class="mt-2 border-0 text-center">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="outline-secondary">How do you use the Travis-Tracker?</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>Use the header to pick an adventure...  Follow along...  Go out and have your own adventure...</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <b-card no-body class="mt-2 border-0">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-3 variant="outline-secondary">Little blurbs about what I've done so far</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
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
            </b-collapse>
          </b-card>
        </b-col>
      </b-row>

      <b-row v-if="adventureInProgress">
        <b-col cols="12">
          <b-card no-body class="mt-2 mb-3 border-0 text-center">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-4 variant="outline-secondary">The Current Adventure</b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <h3>The Camino de Santiago!!</h3>
                <b-card-text>
                  2 weeks of hiking in Spain.  Good food.  Lots of interesting people.
                </b-card-text>
                <b-button pill variant="outline-primary" @click="$router.push('/camino-2019')">~ Last Update: {{lastUpdate}} ~</b-button>
              </b-card-body>
            </b-collapse>
          </b-card>
        </b-col>
      </b-row>

      <b-row v-if="!adventureInProgress">
        <b-col cols="12">
          <b-card no-body class="mt-2 mb-3 border-0 text-center">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-5 variant="outline-secondary">What's Next?</b-button>
            </b-card-header>
            <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
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
            </b-collapse>
          </b-card>
        </b-col>
      </b-row>

    </b-container>

    <b-navbar id="footer">
      <b-navbar-brand>
        <router-link to="/home">
            <span class="logo ml-2">Travis Tracker</span>
        </router-link>
      </b-navbar-brand>
    </b-navbar>
    </div>
</template>

<script>
// vue-breakpoints is used to change to layout if for smaller screens.  I took it out but leaving it for possible future use.
// import { showAt, hideAt } from 'vue-breakpoints'
import TrackerHeader from './header'

export default {
  name: 'TrackerHome',
  components: {
    TrackerHeader
    // hideAt,
    // showAt
  },
  data () {
    return {
      backgroundImg: process.env.BASE_URL + '/img/background/winds_wrong_pass.jpg',
      showHome: false,
      adventureInProgress: false,
      lastUpdate: '10/14/19'
    }
  },
  methods: {

  }
}
</script>

<style>
.specialCard {
  opacity: .8;
}

.customBackground {
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
}

.changeBackground {
  background-color: white;
}

#footer {
  height: 100px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #03173e;
  padding: 0 20px;
}

.logo {
  font-weight: bold;
  color: white;
}
</style>
