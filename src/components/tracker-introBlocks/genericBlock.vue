<template>
    <!--
        A generic component for the blocks that just display a card with text
    -->
    <div>
        <b-collapse :id="cID" :accordion="aID">
            <b-card>
                <slot></slot>
            </b-card>
        </b-collapse>
    </div>
</template>

<script>
export default {
  props: ['collapseID', 'accordionID', 'cardText'],
  data () {
    return {
      cID: this.collapseID,
      aID: this.accordionID,
      text: this.cardText
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
