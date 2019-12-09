<template>
    <!--
        A generic component for the tabs on the portfolio page
    -->
    <div>
        <b-tab :title="title1">
            <b-card-title>{{ title2 }}</b-card-title>
            <b-card-text>
                {{ text }}
            </b-card-text>
            <b-card-text>
                {{ tech }}
            </b-card-text>
            <b-container class="mt-4">
                <b-card-img :src="publicPath + img1"></b-card-img>
            </b-container>
        </b-tab>
    </div>
</template>

<script>
export default {
  props: ['tabTitle', 'cardTitle', 'cardText', 'cardTech', 'cardImg'],
  data () {
    return {
      publicPath: process.env.BASE_URL,
      title1: this.tabTitle,
      title2: this.cardTitle,
      text: this.cardText,
      tech: this.cardTech,
      img1: this.cardImg
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
