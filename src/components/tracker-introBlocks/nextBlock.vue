<template>
    <!--
        A specific component since this has html blocks in it
    -->
    <div>
        <b-collapse :id="cID" :accordion="aID">
        <b-card>
            <b-card-body>
            <h3>Nothing planned :(</h3>
            <b-card-text>
                I recently hiked the Camino de Santiago, which I really enjoyed!
                <br>
                But after the end of an adventure, I'm always asking myself: "What's next?"
                <br>
                The Middle East?  Climb Kilimanjaro? Hike New Zealand? Take the cheapest flight I can find to wherever it goes?
            </b-card-text>
            <b-card-text>
                I guess we'll find out what it ends up being eventually...
            </b-card-text>
            </b-card-body>
        </b-card>
        </b-collapse>
    </div>
</template>

<script>
export default {
  props: ['collapseID', 'accordionID'],
  data () {
    return {
      cID: this.collapseID,
      aID: this.accordionID
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
