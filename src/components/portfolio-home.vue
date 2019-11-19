<template>
    <!--
      This is the main page for the portfolio section of the site.

      It displays my resume and a selection of projects that I have worked on.
      It's setup as tabs, so each button navigates to different content.
    -->
    <div>
        <topHeader titleLink="/portfoliohome" titleText="Portfolio"/>

        <div class="mt-0">
            <b-card no-body>
                <b-tabs pills card>
                    <!-- Each tab contains specific content for a project -->

                    <!-- The resume is created in its own component -->
                    <b-tab title="Resume">
                        <b-card-text>
                            <resume />
                        </b-card-text>
                    </b-tab>

                    <!-- The data for this is stored in a json file -->
                    <portfolioTab v-bind:key="p.id" :tabTitle="p.tabTitle" :cardTitle="p.cardTitle" :cardText="p.cardText" :cardImg="p.cardImg" :cardTech="p.cardTech" v-for="p in portfolioData"/>
                </b-tabs>
            </b-card>
        </div>

        <bttmFooter footerLink="/portfoliohome" footerText="Portfolio" />
    </div>
</template>

<script>
import topHeader from './header'
import bttmFooter from './footer'
import resume from './resume'
import portfolioData from '../../public/json-files/portfolioData.json'
import portfolioTab from './portfolioTab'

export default {
  name: 'PortfolioHome',
  components: {
    topHeader,
    bttmFooter,
    resume,
    portfolioTab
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      portfolioData
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
