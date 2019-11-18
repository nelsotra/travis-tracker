<template>
  <div class="changeBackground">
    <topHeader titleLink="/trackerhome" titleText="Travis Tracker"/>

    <div>
      <b-container fluid class="mt-4 mb-4">
        <b-row>
          <b-col cols="4"></b-col>
          <b-col cols="4">
            <b-form-select v-model="current.selectedAdventure">
              <option v-bind:key="o.id" v-bind:value="{id: o.id, name: o.name, background: o.background, title: o.title, text: o.text, data: o.data}" v-for="o in other">{{ o.name }}</option>
                <hr />
              <optgroup label="Hiking">
                <option v-bind:key="h.id" v-bind:value="{id: h.id, name: h.name, background: h.background, title: h.title, text: h.text, data: h.data}" v-for="h in hiking">{{ h.name }}</option>
              </optgroup>
                <hr />
              <optgroup label="Biking">
                <option v-bind:key="b.id" v-bind:value="{id: b.id, name: b.name, background: b.background, title: b.title, text: b.text, data: b.data}" v-for="b in biking">{{ b.name }}</option>
              </optgroup>
                <hr />
              <optgroup label="Regular Ole Touristy Stuff">
                <option v-bind:key="t.id" v-bind:value="{id: t.id, name: t.name, background: t.background, title: t.title, text: t.text, data: t.data}" v-for="t in tourist">{{ t.name }}</option>
              </optgroup>
            </b-form-select>
          </b-col>
          <b-col cols="4"></b-col>
        </b-row>
      </b-container>
    </div>

    <div v-if="current.selectedAdventure.id === 1">
      <trackerIntro />
    </div>

    <div v-else>
      <adventure
        :key="current.selectedAdventure.id"
        :advBackground="current.selectedAdventure.background"
        :advTitle="current.selectedAdventure.title"
        :advText="current.selectedAdventure.text"
        :dataFile="current.selectedAdventure.data" />
    </div>

    <bttmFooter footerLink="/trackerhome" footerText="Travis Tracker" />
  </div>
</template>

<script>
import topHeader from './header'
import bttmFooter from './footer'
import trackerIntro from './tracker-intro'
import adventure from './adventure'
import camino2019Data from '../../public/json-files/camino-2019.json'
import korea2015Data from '../../public/json-files/korea-2015.json'
import at2016data from '../../public/json-files/at-2016.json'
import beijing2018data from '../../public/json-files/beijing-2018.json'
import breck2011data from '../../public/json-files/breck-seattle-2011.json'
import cambodia2019data from '../../public/json-files/cambodia-2019.json'
import cdt2011data from '../../public/json-files/cdt-2011.json'
import cdt2013data from '../../public/json-files/cdt-2013.json'
import iceland2016data from '../../public/json-files/iceland-2016.json'
import japan2015data from '../../public/json-files/japan-2015.json'
import pacific2014data from '../../public/json-files/pacificCoast-2014.json'
import pct2008data from '../../public/json-files/pct-2008.json'
import pct2016data from '../../public/json-files/pct-2016.json'
import peru2017data from '../../public/json-files/peru-2017.json'
import seattle2013data from '../../public/json-files/seattle-maine-2013.json'
import wonderland2012data from '../../public/json-files/wonderland-2012.json'

export default {
  name: 'TrackerHome',
  components: {
    topHeader,
    bttmFooter,
    trackerIntro,
    adventure
  },
  data () {
    return {
      backgroundImg: process.env.BASE_URL + '/img/background/winds_wrong_pass.jpg',
      camino2019Data,
      korea2015Data,
      at2016data,
      beijing2018data,
      breck2011data,
      cambodia2019data,
      cdt2011data,
      cdt2013data,
      iceland2016data,
      japan2015data,
      pacific2014data,
      pct2008data,
      pct2016data,
      peru2017data,
      seattle2013data,
      wonderland2012data,

      current: {
        selectedAdventure: {
          id: 1,
          name: 'Select an Adventure',
          background: '',
          title: '',
          text: '',
          data: ''
        }
      },

      other: [
        {
          id: 1,
          name: 'Select an Adventure',
          background: '',
          title: '',
          text: '',
          data: ''
        }
      ],

      hiking: [
        {
          id: 2,
          name: 'Camino - 2019',
          background: '/img/background/camino.jpg',
          title: 'Camino de Santiago 2019',
          text: 'I needed a vacation, but I\'m still working, so it needed to be something that could be done in a relatively short amount of time.  The Camino is perfect for that.  It\'s a pilgrimage trail in Spain.  ~450 miles, pretty Spanish country side, neat Spanish towns, good Spanish food, best of all - it draws an eclectic mix of people from all over the world.  It\'s time to hike the Camino.',
          data: camino2019Data
        },
        {
          id: 3,
          name: 'AT - 2016',
          background: '/img/background/tent.jpg',
          title: 'AT 2016!!!',
          text: 'The plan was to hike the southern portion of the PCT and then pop over to hike the AT. Well, that partially happened. I hiked about 200 miles of the PCT, broke a tooth, ended up in San Diego, and decided to just say f*&^ it and head east. Was this a good decision? Who knows. All I know is that I\'m definitely taking a much more relaxed attitude to my hiking than the last time around. Basically, whatever happens, happens.',
          data: at2016data
        },
        {
          id: 4,
          name: 'PCT - 2016',
          background: '/img/background/pct.jpg',
          title: 'PCT 2016!!!',
          text: 'I originally hiked the PCT in 2008, but it\'s always been my favorite adventure, so I\'ve wanted to redo it for quite awhile. 2016 turned out to be the year to do it. I\'m starting in March with just the southern section first (from Walker Pass to the Mexican border). Why? Because my one complaint about the PCT was the horrendous heat while trying to hike the desert, so this year I hope to hike the desert in March when it\'s hopefully a little more comfortable. Of course, there are still decent mountains to cross in southern California, and there\'s always the chance of a March blizzard to make my life interesting. Wish me luck!',
          data: pct2016data
        },
        {
          id: 5,
          name: 'CDT - 2013',
          background: '/img/background/cdt2013.jpg',
          title: 'The Northern Continental Divide Trail (CDT) - 2013',
          text: '2013 was my crazy summer of fun.  I decided that it was time to finish what I started in 2011 and complete the CDT.  However, hiking only 1/2 of a major trail didn\'t seem like quite enough, so I also planned a cross-country bike tour from Seattle to Maine.  Let the craziness begin.',
          data: cdt2013data
        },
        {
          id: 6,
          name: 'Wonderland - 2012',
          background: '/img/background/wonderland.jpg',
          title: 'Wonderland Trail 2012',
          text: 'The Wonderland is a trail that goes around Mt. Rainier in Washington state.  It\'s a really really pretty trail and it might sound easy at a mere 93 miles in length, but it is a LOT of up and down.  The other downside to this trail is that you have to apply for a permit to hike it and can only camp at designated sites.  Yeah, it sucks, but it\'s worth it, this trail is magnificent!  This is actually my second time on Wonderland.  The first was my very first backpacking trip ever with Rachel, Marilyn, and Karen.  We got rained out and had to bail on the trip, but that one adventure quite possibly set in motion events that would change my life forever and turn me into the crazy thru-hiker that I am today.  So thank you Wonderland, you will always be my special trail.',
          data: wonderland2012data
        },
        {
          id: 7,
          name: 'CDT - 2011',
          background: '/img/background/cdt2011.jpg',
          title: 'The Southern Continental Divide Trail (CDT) - 2011',
          text: '2011 was supposed to be the year that I finished the Triple Crown.  The Triple Crown is what we call the 3 big North-South hiking trails in the US:  The Appalachian Trail (AT), the Pacific Crest Trail (PCT), and the Continental Divide Trail (CDT).  Not very many people have done all 3, the count might be a few hundred at this point, it\'s a fairly exclusive club, and I had planned to become a member of that club in 2011.  Mother Nature had other plans.  2011 turned out to be a HUGE snow year, like record-breaking snow levels.  I made it through New Mexico and part of Colorado, but then my dreams were dashed by the walls of snow ahead of me.  It was horribly depressing, and I took my failure pretty hard, but luckily, something good came of it...',
          data: cdt2011data
        },
        {
          id: 8,
          name: 'PCT - 2008',
          background: '/img/background/pct2008.jpg',
          title: 'PCT 2008!',
          text: 'My second thru-hike, the Pacific Crest Trail, in 2008.  I\'d like to say that I knew what I was doing after I hiked the AT, but I think we all know that\'s not true.  I loved the PCT though, it\'s the perfect combination of reasonable hiking trail (meaning: not too steep/rocky, and well-marked enough to make getting lost difficult, but not impossible) while still having some absolutely stunning scenery.  Yes, the PCT is my favorite of the big 3, it\'s hard to beat this trail.  If you can survive the southern California desert, the rest is simply amazing.',
          data: pct2008data
        }
      ],

      biking: [
        {
          id: 9,
          name: 'Iceland - 2016',
          background: '/img/background/iceland.jpg',
          title: 'Iceland 2016!!!',
          text: 'I decided that one thru-hike a year was way more than enough, so instead of doing another hike after the AT, I decided to go biking. The only question was: Where to go? All of the rides that I wanted to do (finishing the TransAmerica Trail, biking across the Southern US, etc) all sounded pretty horrible in July/August, so instead I decided to go a little farther north. Iceland looks like an amazingly beautiful place and July is a perfect month to visit, so I thought why not? Let\'s do Iceland!',
          data: iceland2016data
        },
        {
          id: 10,
          name: 'Japan - 2015',
          background: '/img/background/japan.jpg',
          title: 'Japan 2015!!!',
          text: 'Biking through South Korea was the first part of my Asian adventure, and it had a very defined plan.  Japan was different.  There is not beautiful bike path running the entire length of the country.  For Japan, I had to pick up a road map and figure it out myself, it was much more ambiguous and unknown.  Where would I go?  Which route would I follow?  I didn\'t know, all I knew was that I could take a ferry from Korea to either Fukuoka or Shimonoseki because, well, that\'s where the ferries go, and from there I had to make my way somehow to Tokyo, because, well, that\'s where my flight left.  That was it.  In a way it was exciting for once to not have a pre-defined route (ALL of my previous bike trips have been on planned routes), but that also makes it a little more daunting.',
          data: japan2015data
        },
        {
          id: 11,
          name: 'Korea - 2015',
          background: '/img/background/korea.jpg',
          title: 'Korea 2015!!!',
          text: 'I decided that it was time for a vacation, but where to go?!? I had a 3-week block of time, but I was having a tough time picking a spot.  Then it hit me, why not go international? 3 weeks is a nice chunk of time to explore, so I started researching destinations and decided that I wanted to go to Asia (because I had never been to Asia), and settled on Japan, because I heard it was very bike friendly and a great country to explore. Then, I stumbled upon a blog describing a bike path in South Korea that will take you across the entire country from Seoul to Busan. Since South Korea isn\'t exactly a huge country, the entire trip could be done in under a week. So that was how I came up with my 3-week Asian adventure: Fly into Seoul, bike to Busan, then take a ferry to Japan.',
          data: korea2015Data
        },
        {
          id: 12,
          name: 'Pacific Coast - 2014',
          background: '/img/background/pacific.jpg',
          title: 'Pacific Coast 2014!!!',
          text: 'I had biked from Seattle to Florence, OR during my crazy summer of 2013, and I decided that it was time to go back and finish the rest of the Pacific Coast.  The coast did not disappoint, it turned out to be one of the most stunning and amazing rides that I have ever done.',
          data: pacific2014data
        },
        {
          id: 13,
          name: 'Seattle to Maine - 2013',
          background: '/img/background/seattleMaine2013.jpg',
          title: 'Biking from Seattle to Maine - 2013',
          text: 'This was my crazy summer of 2013.  First, I biked from Seattle to South Dakota.  Then, I hiked the remainder of the CDT (I started it in 2011).  Then I went back to South Dakota to finish biking to Maine.  Ridiculous.',
          data: seattle2013data
        },
        {
          id: 14,
          name: 'Breck to Seattle - 2011',
          background: '/img/background/breckSeattle2011.jpg',
          title: 'Biking from Breckenridge CO to Seattle - 2011',
          text: 'This bike ride was never supposed to happen.  In 2011 I was hiking the CDT and everything was going fine until I hit a wall of snow in Colorado (2011 was a record-breaking snow year) and had to stop.  Afterwards, I was sitting around sad and depressed at my sisters house, when an idea hit me:  why not try cross-country biking?  I had been wanting to do it for some time, and I even had an old bike sitting in the garage.  Sure, it wasn\'t the best bike for the purpose, but it had wheels and handlebars, I figured it would work just fine.  So that was that.  I borrowed some paniers from a friend, got some maps, and headed out.  A new adventure began from the ashes of a failed one.',
          data: breck2011data
        }
      ],

      tourist: [
        {
          id: 15,
          name: 'Cambodia - 2019',
          background: '/img/background/cambodia.jpg',
          title: 'Cambodia 2019!!!',
          text: 'It was time to check something off of my bucket list:  Angkor Wat.  I\'ve wanted to see it for years, and I finally decided to just suck it up, buy a ticket, and go.  I\'m so glad that I did, Angkor Wat is incredible, and I got to see Hong Kong on the way, which is an amazing city.  I even spent a day in Bangkok, which is not an amazing city, but I\'m still glad that I went.  Overall it was a lovely trip, even if it wasn\'t a typical Travis-Adventure that requires weeks of hiking hundreds of miles, it was still fun.',
          data: cambodia2019data
        },
        {
          id: 16,
          name: 'Beijing - 2018',
          background: '/img/background/beijing.jpg',
          title: 'Beijing 2018!!!',
          text: 'This was a totally spontaneous trip.  I found a super-cheap last-minute flight to Beijing, so I took it.  I think I literally bought the ticket on a Monday and flew out on Wednesday.  That\'s my kind of adventure.  That also means that I had zero time to research the trip, so I went to a bookstore (yes, they still exist!), bought a Beijing guide book, and read it on the plane.  I guess it all worked out.',
          data: beijing2018data
        },
        {
          id: 17,
          name: 'Peru - 2017',
          background: '/img/background/peru.jpg',
          title: 'Peru 2017!!!',
          text: 'My 40th birthday was coming up fast so I decided it to go on an adventure to celebrate.  After going back and forth between different options, I finally decided on Peru and hiking Machu Picchu!  Unfortunately, you have to book the actual Inca Trail hike to MP like 6 months in advance.  I don\'t do anything 6 months in advance, so I did the regular ole tourist thing and took the train there.  But I still wanted to hike!  Luckily, I found another site that was supposed to be similar to MP but muuuuuuch less touristy, because the only way to get there is a grueling 4-day hike.  There are no trains.  No roads.  I suppose you could helicopter yourself there, but I don\'t know how many people would do that.  No, you must hike.  Therefore, I had the entire place to myself and loved every second of it.  It\'s name:  Choquequirao',
          data: peru2017data
        }
      ]
    }
  }
}
</script>

<style>
.specialCard {
  opacity: 0.8;
}

.customBackground {
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
}

.changeBackground {
  background-color: white;
}

.logo {
  font-weight: bold;
  color: white;
}
</style>
