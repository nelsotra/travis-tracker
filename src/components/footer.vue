<template>
  <div>
    <b-navbar id="footer">
      <b-navbar-brand>
        <router-link :to="link">
          <span class="logo ml-2">{{ title }}</span>
        </router-link>
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: ['footerLink', 'footerText'],

  data () {
    return {
      link: this.footerLink,
      title: this.footerText
    }
  }
}
</script>

<style scoped>
  #footer {
  height: 100px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #03173e;
  padding: 0 20px;
}

</style>
