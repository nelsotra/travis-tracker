<template>
  <div>
    <b-navbar id="header">
      <b-navbar-brand>
        <router-link :to="link">
            <span class="logo ml-2">{{ title }}</span>
        </router-link>
      </b-navbar-brand>
      <b-navbar-nav right>
        <b-nav-item >
          <router-link to="/mainhome">Main</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: ['titleLink', 'titleText'],

  data () {
    return {
      link: this.titleLink,
      title: this.titleText
    }
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
    color: #a6b7f0;
    text-decoration: underline;
  }

  #adventure-dropdown{
    text-decoration: none;
    color: white !important;
  }

</style>
