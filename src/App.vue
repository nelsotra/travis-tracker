<template>
  <div id="app">
    <!-- <app-header /> -->
    <router-view/>
  </div>
</template>

<script>
// import header from './components/header'

export default {
  name: 'app',
  components: {
    // 'app-header': header
  },
  data () {
    return {
    }
  }
}
</script>
<style >
body, html{
    margin: 0;
    font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  }

</style>
