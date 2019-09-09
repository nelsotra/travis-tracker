<template>
    <div class="customBackground pb-5 pt-3" :style="{ backgroundImage: `url('${backgroundImg}')` }">
    <b-container class="mt-3" >
        <b-row v-if="showHome">
            <b-col>
            </b-col>
            <b-col cols="10">
                <b-card class="specialCard mt-2" border-variant="secondary" >
                    <h4 slot="header"><center>Welcome to the Travis Tracker!!</center></h4>
                    <b-card-text>
                        <p>
                            Hi, I'm Travis.
                        </p>
                        <p>
                            I made this site so that my friends and family could follow along as I go on some hiking/biking/whatever adventure
                        </p>
                        <p>
                            Use the buttons in the header to navigate to the various adventures.
                        </p>
                        <ul>
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
                            <li><b><i>Peru/Beijing/Cambodia 2017-2019</i></b></li>
                                <ul>
                                    <li>Instead of doing big, thousand mile hikes and bikes, the last couple of years I've done smaller, international adventures.</li>
                                    <li>It started with going to Peru to see Machu Picchu and Choquequirao, then a last-minute vacay to Beijing, and then a bucket-list trip to see Angkor Wat in Cambodia</li>
                                </ul>
                            <li><b><i>What's Next?!?</i></b></li>
                                <ul><li>I currently don't have anything booked, but I'm thinking about heading to Spain to hike the Camino de Santiago.  Maybe in the fall?  We'll see what happens...</li></ul>
                        </ul>

                        <p>
                            I've done other things, I've actually hiked the entire triple crown (AT in 2005, PCT in 2008, CDT in 2011/2013.  Plus cross-country biking:  Seattle to Maine).
                            I just did those other things before I had the Travis-Tracker, but maybe someday I'll go back, dig out those pictures, and add them to the site...
                        </p>
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col>
            </b-col>
        </b-row>
    </b-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      backgroundImg: process.env.BASE_URL + '/img/background/winds_wrong_pass.jpg',
      showHome: true
    }
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
}
</style>
