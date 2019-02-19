<template>
  <div class="containerFlex">
    <div class="container">
      
      <nuxt-link to="/" class="imageLink" aria-label="Home">
        <img src="~/assets/logo.svg" alt="logo and home button"/>
      </nuxt-link>
      <div class="links">
        <nuxt-link class="link" to="/contact">contact</nuxt-link>
        <nuxt-link class="link" to="/resume">resume</nuxt-link>
        <nuxt-link class="link" to="/projects">projects</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data:()=>({hovered: false}),
}
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Poiret+One");
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
  img {
    width: 70px;
    background-color: #4e341d;
  }
  .links {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-basis: 50%;
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
    margin-top: 4px;
  }
  .link:hover{
    height: 1.5em;
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
  @media only screen and (max-width: 600px) {
    .links {
      height: calc(102px + 1em);
      margin-top: 1em;
    }
    .link:hover {
      height: 1em;
    }
    .container{
      background-color: rgba(255, 255, 255, 0.493);
      padding: 0;
    }
    .imageLink {
      margin: 1em 0;
    }
  }
  @media only screen and (max-width: 1101px) {
  .container{
    margin: 0;
  }
}
</style>
