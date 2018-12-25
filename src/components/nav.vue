<template>
  <div class="containerFlex" :class="{centered:centered}">
    <div class="container" :class="{centered:centered}">
      <nuxt-link class="link home" to="/">Colin McNeil</nuxt-link>
      <nuxt-link to="/">
        <img src="~/assets/logo.svg"/>
      </nuxt-link>
      <nuxt-link class="link" to="/contact">contact</nuxt-link>
      <nuxt-link class="link" to="/resume">resume</nuxt-link>
      <nuxt-link class="link" to="/projects">projects</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    let centered = this.$router.currentRoute.name === 'index'
    return {centered}
  },
  watch: {
    $route: function(route) {
      this.centered = route.name === 'index'
    }
  }
}
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Poiret+One");
  .containerFlex.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
  }
  .container {
    position: fixed;
    display: flex;
    margin: 1em;
    flex-wrap: wrap;
    z-index: 10;
  }
  .container.centered {
    min-height: 490px;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 70px;
    margin: 0 0 1em 1em;
  }
  .link {
    color: white;
    font-size: 2em;
    background-color: black;
    text-decoration: none;
    margin : 0.2em;
    line-height: 0.7em;
    width: 199px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    justify-content: center;
    transition: ease 0.2s all;
    height: 1em;
    margin-top: 0;
  }
  .link:hover{
    height: 105px;
    background-color: #4e341d;
    color: #eddbd6;
  }
  .link.home {
    display: none;
  }
  .container.centered .link{
    height: 1em;
  }

  .container.centered .link:hover {
    padding: 0.5em 0;
  }
  .container.centered .link.home {
    display: flex;
  }
  .container.centered img {
    width: 200px;
    margin: 0 0 1em 0;
  }
</style>
