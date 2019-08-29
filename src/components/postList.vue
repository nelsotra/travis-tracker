<template>
    <b-container class="mt-3">
        <div class="text-center" v-if="loading">
            <b-spinner label="Spinning" class="spinner mt-3"></b-spinner>
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
                <!-- :text="item.text" -->
            </b-carousel>
        </b-modal>

        <!-- <div class="mb-3" v-for="item in items" v-bind:key="item.id">
            <b-card no-body class="overflow-hidden" >
                <b-row no-gutters>
                <b-col md="3">
                    <img 
                        :src="getImgUrl(item.img)"  
                        class="rounded-0"
                        width="200"
                        @click="$bvModal.show('carousel-modal')"
                        style="cursor: pointer;" />
                    
                </b-col>
                <b-col md="9">
                    <b-card-body>
                    <h5 slot="header">{{  item.title }}</h5>
                    <b-card-text>
                        <p> {{ item.date }} </p>
                        <p> {{ item.text }} </p>
                    </b-card-text>
                    </b-card-body>
                </b-col>
                </b-row>
            </b-card>
        </div> -->
        <!-- The main list of posts for the currently chosen adventure -->
        <b-list-group class="mt-4" >
            <b-list-group-item class="mb-3" v-for="item in items" v-bind:key="item.id">
                <b-media>
                    <b-img 
                        slot="aside" 
                        :src="getImgUrl(item.img)"  
                        width="200" 
                        @click="$bvModal.show('carousel-modal')"
                        style="cursor: pointer;">
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

export default {
    props: ['inputFile'],
    data() {
        return {
        items: null,
        loading: false //For the spinner
        }
    },
    methods: {
        getPosts () {
            this.loading = true

            axios.get('/json-files/' + this.inputFile)
                .then((res) => {
                    console.log(res.data)
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
                return require('../assets/img/' + pic)
            }
            return ""
            
        }
    },
    created() {
        this.getPosts()
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