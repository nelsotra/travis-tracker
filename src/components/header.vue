<template>
  <div>
    <b-navbar id="header">
      <b-navbar-brand>
        <router-link to="/">
            <span class="logo ml-5">Travis Tracker</span>
        </router-link>
      </b-navbar-brand>
      <b-navbar-nav right>
        <b-nav-item >
          <b-dropdown variant="link" id="adventure-dropdown" text="Adventure">
            <b-dropdown-item disabled>Hiking</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item to="/at-2016">AT - 2016</b-dropdown-item>
            <b-dropdown-item to="/pct-2016">PCT - 2016</b-dropdown-item>
            <b-dropdown-item class="mt-3" disabled>Biking</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item to="/iceland-2016">Iceland - 2016</b-dropdown-item>
            <b-dropdown-item to="/korea-2015">Korea - 2015</b-dropdown-item>
            <b-dropdown-item to="/japan-2015">Japan - 2015</b-dropdown-item>
            <b-dropdown-item to="/pacificCoast-2014">Pacific Coast - 2014</b-dropdown-item>
            <b-dropdown-item class="mt-3" disabled>Regular Ole Touristy Stuff</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item to="/cambodia-2019">Cambodia - 2019</b-dropdown-item>
            <b-dropdown-item to="/beijing-2018">Beijing - 2018</b-dropdown-item>
            <b-dropdown-item to="/peru-2017">Peru - 2017</b-dropdown-item>
            <b-dropdown-item class="mt-3" disabled>All 3 Trails in 1 Year</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
          </b-dropdown>
        </b-nav-item>
        <b-nav-item >
          <router-link to="/home">Home</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: null,
      selected: null,
      loading: false // For the spinner
    }
  },
  methods: {
  },
  computed: {
    // Not using these, but keeping in case I change my mind later
    // getList () {
    //     this.items = this.$store.getters.adventureList
    //     return this.$store.getters.adventureList
    // },
    // getHiking () {
    //   let filteredItems = this.$store.getters.adventureList.filter((item) => {
    //     return item.type.toLowerCase().includes('hiking')
    //   })
    // }
  }
}
</script>

<style scoped>
  #header {
    height: 100px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #03173e;
    padding: 0 20px;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }
  img {
    width: 100px;
    height: auto;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  button {
    margin: 0 4px;
  }
  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #e05929;
  }

  .logout {
    background-color: transparent;
    border: none;
    font: inherit;
    color: white;
    cursor: pointer;
  }
  button.logout:hover{
    color: #e05929;
  }

</style>
