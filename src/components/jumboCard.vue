<template>
    <!--
      A component for the main landing page that displays the links for the
      portfolio and the tracker.
    -->
    <div>
        <b-container class="mt-5">
            <b-jumbotron bg-variant="light" border-variant="secondary">
                <form class="form-inline justify-content-center">
                <router-link :to="page">
                    <b-button size="lg" variant="link" >{{ title }}</b-button>
                </router-link>
                </form>
            </b-jumbotron>
        </b-container>
    </div>
</template>

<script>
export default {
  props: ['titleText', 'pageLink'],
  data () {
    return {
      title: this.titleText,
      page: this.pageLink
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
