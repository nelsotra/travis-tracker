<template>
    <b-container class="mt-3">
        <div class="text-center" v-if="loading">
            <b-spinner label="Spinning" class="spinner mt-3"></b-spinner>
        </div>

        <b-button pill block class="mb-1" variant="outline-secondary" @click="toggleList">
            <span v-if="!showList">Show List</span>
            <span v-if="showList">Hide List</span>
        </b-button>

        <b-button pill block class="mb-1" variant="outline-secondary" @click="$bvModal.show('carousel-modal')">
            Photos
        </b-button>

        <b-button pill block class="mb-1" variant="outline-secondary" @click="toggleMap">
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
                    :img-src="getImgUrl(item.img)"
                    content-visible-up="sm">
                </b-carousel-slide>
                
            </b-carousel>
        </b-modal>

        <!-- A list of all the posts for this adventure.  The expandable image lets you click on it
        to see a full-screen version of the image. -->
        <div v-if="showList">
            <div v-for="item in items" v-bind:key="item.id">
                <b-row class="mb-3 border">
                    <b-col cols="3">
                        <figure class="mt-2">
                        <expandable-image 
                            slot="aside" 
                            :src="getImgUrl(item.img)"
                            alt="image"
                            @error="imageLoadError(item.img)"
                        />
                        <figcaption>
                            {{ item.caption }}
                        </figcaption>
                        </figure>
                    </b-col>
                    <b-col>
                    <b-card 
                        style="border: none;" 
                        v-bind:title="item.title" 
                        v-bind:sub-title="item.date">     
                    <hr>
                    <b-card-text>
                        {{ item.text }}
                    </b-card-text>
                </b-card>
                    </b-col>
                </b-row>
            </div>
        </div>
        
    </b-container>
</template>


<script>
import postMap from './postMap'

export default {
    props: ['mapId', 'inputItems'],
    components: {
        postMap
    },
    data() {
        return {
        publicPath: process.env.BASE_URL,
        items: this.inputItems,
        mapName: this.mapId + "-map",
        showMap: false,
        showList: false,
        loading: false //For the spinner
        }
    },
    methods: {
        imageLoadError (img) {
            console.log('Image failed to load: ' + img)
        },
        toggleMap () {
            this.showMap = !this.showMap
        },
        toggleList () {
            this.showList = !this.showList
        },
        getImgUrl(pic) {
            if (pic){
                //return require('../assets/img/' + pic)
                return this.publicPath + pic
            }
            return ""
            
        },
        getMap () {
            const element = document.getElementById(this.mapName)
            const options = {
                zoom: 14,
                center: new google.maps.LatLng(51.5,-0.19)
            }

            const map = new google.maps.Map(element, options);
            this.$bvModal.show('map-modal')
        }
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

.expandable-image{
    width: 100%;
    position: relative;
    transition: 0.25s opacity;
    cursor: pointer;
}



</style>