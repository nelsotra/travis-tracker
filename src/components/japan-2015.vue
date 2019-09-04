<template>
    <b-container class="mt-3">
        <b-row>
            <b-col>
            </b-col>
            <b-col cols="10">
                <b-card class="mt-2" border-variant="secondary" >
                    <h4 slot="header"><center>Japan 2015!!!</center></h4>
                    <b-card-text>
                        Biking through South Korea was the first part of my Asian adventure, and it had a very defined plan.  What I mean by that is with the 4-rivers bike path through Korea, my route was laid out for me.  It was a well-marked, beautiful bike path and I knew exactly where it would take me.  Japan was different.  There is not beautiful bike path running the entire length of the country.  For Japan, I had to pick up a road map and figure it out myself.  It was much more ambiguous and unknown.  Where would I go?  Which route would I follow?  I didn't know, all I knew was that I could take a ferry from Korea to either Fukuoka or Shimonoseki because, well, that's where the ferries go, and from there I had to make my way somehow to Tokyo, because, well, that's where my flight left from.  That was it.  I had a starting point, an ending point, and nothing in-between.  In a way it was exciting for once to not have a pre-defined route (ALL of my previous bike trips have been on planned routes), but that also makes it a little more daunting.  Nonetheless, this was my Japanese portion of the trip and I was more than a little curious to see how it would all turn out...
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col>
            </b-col>
        </b-row>

        <postList inputFile='/japan-2015.json' :inputItems="data"></postList>
        
    </b-container>
</template>

<script>
import postList from './postList'
import data from '../../public/json-files/japan-2015.json'

export default {
    data() {
        return {
            data
        }
    },
    components: {
        postList
    }
    
}
</script>

<style>

</style>
