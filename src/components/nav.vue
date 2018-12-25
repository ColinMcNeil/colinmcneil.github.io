<template>
  <div class="container" :class="{centered:centered}">
    <nuxt-link class="link home" to="/">Colin McNeil</nuxt-link>
    <nuxt-link to="/">
      <img src="~/assets/logo.svg"/>
    </nuxt-link>
    <nuxt-link class="link" to="/contact">contact</nuxt-link>
    <nuxt-link class="link" to="/resume">resume</nuxt-link>
    <nuxt-link class="link" to="/projects">projects</nuxt-link>
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
  .container {
    position: fixed;
    display: flex;
    margin: 1em;
    flex-wrap: wrap;
  }
  .container.centered {
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 70px;
    margin: 0 0 1em 1em;
  }
  .link {
    font-family: "Poiret One";
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
