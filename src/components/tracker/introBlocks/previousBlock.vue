<template>
    <!--
        A specific component since this has html blocks in it
    -->
    <div>
        <b-collapse :id="cID" :accordion="aID">
            <b-card class="text-left">
              <b-card-body>
                <ul>
                    <li><b><i>AT 2005</i></b></li>
                      <ul><li>My very first thru-hike, the Appalachian Trail.  This is the one that started it all...</li></ul>
                    <li><b><i>PCT 2008</i></b></li>
                      <ul><li>My second thru-hike, the amazing PCT.  Still my favorite of them all.</li></ul>
                    <li><b><i>Southern CDT 2011</i></b></li>
                      <ul><li>An attempt to collect my Triple Crown and hike the CDT.  It did NOT go well.</li></ul>
                    <li><b><i>Breck CO to Seattle 2011</i></b></li>
                      <ul><li>After my failed CDT attempt, I decided to pick up an old bike, start riding west, and see where I got.  This was that trip, and from it was born a new love of long-distance bike touring.  I guess good things can come from failure, you just have to be open to them.</li></ul>
                    <li><b><i>Wonderland Trail 2012</i></b></li>
                      <ul><li>Hiked the entire Wonderland Trail in 2012.  It's an absolutely stunning trail (if you're lucky enough to get nice weather for it).</li></ul>
                    <li><b><i>Seattle to Maine 2013</i></b></li>
                      <ul><li>Biked from Seattle to Maine.  The long, northern route across country.  I even cut across Canada for a bit (what can I say, I wanted to see Niagara Falls).</li></ul>
                    <li><b><i>Nothern CDT 2013</i></b></li>
                      <ul><li>An attempt to collect my Triple Crown by finishing the CDT.  It DID go well this time!  Well, I mean, I got lost on a daily basis, but I finished the trail, and that's what counts.</li></ul>
                    <li><b><i>Pacific Coast 2014</i></b></li>
                      <ul><li>Biking down the Pacific Coast of the US is one of the most gorgeous bike rides that I've ever done</li></ul>
                    <li><b><i>Korea/Japan 2015</i></b></li>
                      <ul><li>Korea and Japan were a single 3-week trip in 2015.  I started in Korea and ended in Japan.  It was amazing, I want to go back</li></ul>
                    <li><b><i>PCT 2016</i></b> </li>
                      <ul><li>Only did about a week on the PCT in late winter 2016, mostly as a warm-up for the AT.  I meant to go back after the AT, but never did :( </li></ul>
                    <li><b><i>AT 2016</i></b></li>
                      <ul><li>Hiked the entire Appalachian Trail in 2016! The second time around was MUCH different from the first, yet oddly the same.</li></ul>
                    <li><b><i>Iceland 2016</i></b></li>
                      <ul><li>After hiking the AT I was pretty much over hiking, but I still wanted to adventure, so I grabbed my bike and went to Iceland.  There's a highway that circles all of Iceland, which is quite convenient for a lazy biker like me.</li></ul>
                    <li><b><i>Peru/Beijing/Cambodia 2017-2019</i></b></li>
                      <ul>
                          <li>Instead of doing big, thousand mile hikes and bikes, the last couple of years I've done smaller, international adventures.</li>
                          <li>It started with going to Peru to see Machu Picchu and Choquequirao, then a last-minute vacay to Beijing, and then a bucket-list trip to see Angkor Wat in Cambodia</li>
                      </ul>
                    <li><b><i>Camino de Santiago 2019</i></b></li>
                      <ul><li>2 weeks of hiking the Camino de Santiago in Spain</li></ul>
                </ul>
              </b-card-body>
            </b-card>
          </b-collapse>
    </div>
</template>

<script>
export default {
  props: ['collapseID', 'accordionID'],
  data () {
    return {
      cID: this.collapseID,
      aID: this.accordionID
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
