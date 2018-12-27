<template>
  <div class="containerFlex" :class="{centered:centered}">
    <div class="container" :class="{centered:centered}">
      <nuxt-link class="link home" to="/" @mouseover.native="hovered=true" @mouseleave.native="hovered=false">{{title}}</nuxt-link>
      <nuxt-link to="/" class="imageLink">
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
    return {centered, hovered: false}
  },
  watch: {
    $route: function(route) {
      this.centered = route.name === 'index'
    }
  },
  computed: {
    title(){
      return this.hovered ? 'I am a well-rounded [maker, developer, technician, problem solver, espresso enthusiast] interested in Web Development & Data Science' : 'Colin McNeil'
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
    padding: 1em;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 10;
    width: 100%;
    top: 0;
    margin-left: -70px;
    background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 29%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
  }
  .container.centered {
    min-height: 490px;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1em;
    top: auto;
  }
  img {
    width: 70px;
    background-color: #4e341d;
  }
  .link {
    color: white;
    font-size: 2em;
    background-color: black;
    text-decoration: none;
    margin : 0 0.5em;
    line-height: 0.7em;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease 0.2s all;
    height: 1em;
    margin-top: 0;
  }
  .link:hover{
    height: 114px;
    background-color: #4e341d;
    color: #eddbd6;
  }
  .nuxt-link-active {
    background-color: #4e341d;
  }
  .link.home {
    display: none;
    background-color: transparent;
    text-decoration: underline;
    color: black;
    font-weight: bolder;
  }
  .container.centered .link.home:hover {
    height: 1em;
    padding: 0;
  }
  .container.centered .link{
    height: 1em;
    margin-top: 0.2em;
  }

  .container.centered .link:hover {
    padding: 0.5em 0;
  }
  .container.centered .link.home {
    display: flex;
    height: 3em;
  }
  .container.centered .link.home:hover {
    font-size: 1.5em;
    line-height: 0.9em;
    padding: 2em;
    text-decoration: none;
    width: 50%;
    min-width: 350px;
    text-align: center;
    font-family: inconsolata;
    background-color: rgb(0, 0, 0);
    color: white;
    font-weight: 500;
  }
  .container.centered img {
    width: 200px;
    margin: 0;
  }
  .container.centered .imageLink {
    margin: 0.5em 0 0.4em 0;
  }
  @media only screen and (max-width: 600px) {
    .link {
      margin: 0.5em;
    }
    .container.centered .link:hover {
      padding: 0;
    }
    .container{
      margin: 0;
      background-color: rgba(255, 255, 255, 0.493);
    }
  }
</style>
