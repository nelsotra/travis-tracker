<template>
    <b-container class="mt-3">
        <div class="text-center" v-if="loading">
            <b-spinner label="Spinning" class="spinner mt-3"></b-spinner>
        </div>

        
        <b-button variant="link" @click="toggleMap">
            <span v-if="!showMap">Show Map</span>
            <span v-if="showMap">Hide Map</span>
        </b-button>

        <div class="mt-3" v-if="showMap">
            <postMap :name="mapName" :itemsList="items"></postMap>
        </div>

        <!-- A modal to let users flip through all of the images in a carousel -->
        <b-modal id="carousel-modal" hide-footer hide-header>
            <b-carousel
                id="carousel-1"
                :interval="0"
                controls
                indicators
                background="#03173e">

                <b-carousel-slide 
                    v-for="item in items" 
                    v-bind:key="item.id"
                    :caption="item.caption"
                    :img-src="getImgUrl(item.img)"
                    img-width="1024"
                    content-visible-up="sm">
                </b-carousel-slide>
                
            </b-carousel>
        </b-modal>

        
        <!-- <b-modal id="map-modal" hide-footer hide-header>
            Map Modal
           <postMap name="tmp"></postMap>
        </b-modal> 
        :src="getImgUrl(item.img)" 
        src="../assets/img/breck_snow.jpg"
        :src="getImgUrl(item.img)"
        -->

        <!-- The main list of posts for the currently chosen adventure -->
        <b-list-group class="mt-4" >
            <b-list-group-item class="mb-3" v-for="item in items" v-bind:key="item.id">
                <b-media>
                    <b-img 
                        slot="aside" 
                        :src="getImgUrl(item.img)"
                        alt="image"
                        width="200" 
                        @click="$bvModal.show('carousel-modal')"
                        style="cursor: pointer;"
                        @error="imageLoadError(item.img)">
                    </b-img>
                    <div class="listHeader" >
                    <h5>{{ item.title }}</h5>
                    <h6>{{ item.date }}</h6>
                    </div>
                    <hr>
                    <p> {{ item.text }} </p>
                </b-media>
            </b-list-group-item>
        </b-list-group>

    </b-container>
</template>


<script>
import axios from 'axios'
import postMap from './postMap'

export default {
    props: ['inputFile', 'mapId', 'inputItems'],
    components: {
        postMap
    },
    data() {
        return {
        publicPath: process.env.BASE_URL,
        items: this.inputItems,
        mapName: this.mapId + "-map",
        showMap: false,
        loading: false //For the spinner
        }
    },
    methods: {
        imageLoadError (img) {
            //alert("testing")
            console.log('Image failed to load: ' + img)
        },
        toggleMap () {
            //console.log(typeof this.items)
            this.showMap = !this.showMap
        },
        getPosts () {
            this.loading = true

            axios.get('/json-files' + this.inputFile)
                .then((res) => {
                    //console.log(res.data)
                    this.items = res.data
                })
                .catch((error) => {
                    console.log('postList error: ' + error)
                })
                .finally(event => {
                    this.loading = false
                })
        },
        getImgUrl(pic) {
            if (pic){
                //return require('../assets/img/' + pic)
                //return require('../../public/img/' + pic)
                //console.log(this.publicPath + pic)
                return this.publicPath + pic
            }
            return ""
            
        },
        getMap () {
            //console.log('map name: ' + this.mapName)
            const element = document.getElementById(this.mapName)
            const options = {
                zoom: 14,
                center: new google.maps.LatLng(51.5,-0.19)
            }

            const map = new google.maps.Map(element, options);
            this.$bvModal.show('map-modal')
        }
    },
    created() {
        //this.getPosts()
    }
}
</script>

<style>

.spinner {
    color: #e9d845;
    position : absolute;
    z-index  : 995;
    width: 6rem;
    height: 6rem;
    color: #f8f5ec;
}


</style>