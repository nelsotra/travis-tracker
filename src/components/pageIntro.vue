<template>
    <!--
      This component displays a picture and some intro text for an adventure

      Previously, I had a show-at to remove the text when the screen got too small,
      because some of the text was too long and overlapping the buttons, but then I changed
      the screen configuration to put the buttons on top, so that problem went away
    -->
    <div class="customBackground pb-5 pt-3" :style="{ backgroundImage: `url('${backgroundImg}')` }">
        <b-row>
            <b-col>
            </b-col>
            <b-col cols="8">
                <b-card class="specialCard mt-2" border-variant="secondary" >
                    <h4 slot="header"><center>{{ title }}</center></h4>
                    <!-- <show-at breakpoint="mediumAndAbove"> -->
                      <b-card-text>
                          {{ text }}
                      </b-card-text>
                    <!-- </show-at> -->
                </b-card>
            </b-col>
            <b-col>
            </b-col>
        </b-row>
    </div>
</template>

<script>
// Not using the breakpoints anymore, but might in the future
// import { showAt, hideAt } from 'vue-breakpoints'

export default {
  props: ['backImg', 'introTitle', 'introText'],
  data () {
    return {
      backgroundImg: process.env.BASE_URL + this.backImg,
      title: this.introTitle,
      text: this.introText
    }
  },
  // components: {
  //   hideAt,
  //   showAt
  // },
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
}

</style>
