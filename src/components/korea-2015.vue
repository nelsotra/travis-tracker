<template>
    <b-container class="mt-3">
        
        <pageIntro :backImg="backgroundImg" :introTitle="title" :introText="text"></pageIntro>
        <postList inputFile='/korea-2015.json' :inputItems="data"></postList>
        
    </b-container>
</template>

<script>
import postList from './postList'
import pageIntro from './pageIntro'
import data from '../../public/json-files/korea-2015.json'

export default {
    data() {
        return {
            backgroundImg: '/img/background/korea.jpg',
            data,
            title: 'Korea 2015!!!',
            text: 'I decided that it was time for a vacation, and I wanted to do another bike trip, but where to go?!? With my schedule, if I take a week off of work I get 3 weeks for a vacation (gotta love that 7on/7off schedule!), so I knew that I had roughly 3 weeks to go somewhere, but I was having a tough time picking a spot. Even though I\'ve biked all over the US, I\'d still like to do the southern tier (say from San Diego over to Florida), but 3 weeks wasn\'t quite long enough for a trip like that. Then it hit me, why not go international? 3 weeks is a nice chunk of time to explore, so I started researching destinations and decided that I wanted to go to Asia (because I had never been to Asia), and settled on Japan, because I heard it was very bike friendly and a great country to explore. While I was trying to figure out what to do and where to go in Japan, I stumbled upon a blog describing a bike path in South Korea that will take you across the entire country from Seoul to Busan. Since South Korea isn\'t exactly a huge country, the entire trip could be done in under a week. If I was going to fly all the way across the Pacific, why not add on a little trip to Korea while I\'m over there? It made sense to me! So that was how I came up with my 3-week Asian adventure: Fly into Seoul, bike to Busan, then take a ferry to Japan. That was the plan...'
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
