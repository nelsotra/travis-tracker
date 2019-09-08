<template>
    <b-container class="mt-3">
        <div class="text-center" v-if="loading">
            <b-spinner label="Spinning" class="spinner mt-3"></b-spinner>
        </div>

        <!-- A series of buttons to display the content.  At the start nothing but the buttons should be shown -->
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

        <!-- A google map filled with markers from the latitute/longitude info -->
        <div class="mt-3" v-if="showMap">
            <postMap :name="mapName" :itemsList="items"></postMap>
        </div>

        <!-- A modal to let users flip through all of the images in a carousel -->
        <b-modal size="lg" id="carousel-modal" hide-footer hide-header>
            <b-carousel
                id="carousel-1"
                :interval="0"
                controls
                indicators
                background="#03173e">

                <b-carousel-slide
                    v-for="item in items"
                    v-bind:key="item.id"
                    :img-src="publicPath + item.img"
                    content-visible-up="sm">
                </b-carousel-slide>
            </b-carousel>
        </b-modal>

        <!-- A modal to show a single image -->
        <b-modal size="lg" class="full-modal" id="single-img-modal" centered hide-footer >
            <figure class="mt-2">
                <b-img :src="publicPath + selectedItem.img" fluid alt="image" ></b-img>
                <figcaption>
                    {{ selectedItem.caption }}
                </figcaption>
            </figure>
        </b-modal>

        <!-- A list of all the posts for this adventure.  Tried expandable-image for the pictures, but didn't love
        it, so went with a modal to display a single image.  Still not totally satisfied...
        {{ sortList }}-->
        <div v-if="showList">
            <div v-for="item in sortListById" v-bind:key="item.id">
                <!-- I'm using a grid row with 2 columns to show the image and then the text, seemed to be the best way to line everything up
                In case we don't want to show a post, there's an include_post item in the json.  true shows the post, false will hide it-->
                <b-row class="mb-3 border" v-if="item.include_post">
                    <b-col cols="2">
                        <figure class="mt-2">
                            <b-img
                                :src="publicPath + item.img"
                                alt="image"
                                fluid
                                thumbnail
                                @error="imageLoadError(item.img)"
                                v-b-modal="'single-img-modal'"
                                @click="sendInfo(item)"
                                style="cursor: pointer;">
                            </b-img>
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
  data () {
    return {
      publicPath: process.env.BASE_URL,
      items: this.inputItems,
      itemsSorted: null,
      mapName: this.mapId + '-map',
      showMap: false,
      showList: false,
      selectedItem: '',
      loading: false // For the spinner
    }
  },
  methods: {
    // When an image is clicked, this will capture which item was clicked so the image modal can show it
    sendInfo (item) {
      this.selectedItem = item
    },
    // Just writing image loading problems to the console
    imageLoadError (img) {
      console.log('Image failed to load: ' + img)
    },
    // Clicking on the button for the map will toggle it
    toggleMap () {
      this.showMap = !this.showMap
    },
    toggleList () {
      this.showList = !this.showList
    }
  },
  computed: {
    // Need to sort the incoming json object so it's displayed consistently.
    // So, first turn it into an array with Object.values, and then sorted it by the id
    sortListById: {
      get () {
        let values = Object.values(this.items)
        let sortedValues = values.sort((a, b) => a.id - b.id)
        return sortedValues
      }
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
</style>
