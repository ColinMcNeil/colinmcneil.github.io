<template>
<div class="main">
  <h3 class="about" @mouseover="hover" @mouseleave="hovered=false">{{title}}</h3>
  <div class="menu">
  
  <no-ssr>
  <vue-flip width="140px" height="220px" active-hover>
    <div slot="front" class="card home">
      <img src="~/assets/logo.svg" alt="logo and home button"/>
    </div>
    <div slot="back" class="card home card-back">
      <nuxt-link class="link" to="/" aria-label="Home">
        Home
      </nuxt-link>
    </div>
  </vue-flip>
  <vue-flip width="140px" height="220px" active-hover>
    <div slot="front" class="card contact">
      <img src="~/assets/contact.svg" alt="Contact image"/>
    </div>
    <div slot="back" class="card contact card-back">
      <nuxt-link class="link" to="/contact" aria-label="Contact">
        Contact
      </nuxt-link>
    </div>
  </vue-flip>
  <vue-flip width="140px" height="220px" active-hover>
    <div slot="front" class="card resume">
      <img src="~/assets/resume.svg" alt="Resume image"/>
    </div>
    <div slot="back" class="card resume card-back">
      <nuxt-link class="link" to="/resume" aria-label="Resume">
        Resume
      </nuxt-link>
    </div>
  </vue-flip>
  <vue-flip width="140px" height="220px" active-hover>
    <div slot="front" class="card projects">
      <img src="~/assets/projects.svg" alt="Projects image"/>
    </div>
    <div slot="back" class="card projects card-back">
      <nuxt-link class="link" to="/projects" aria-label="Projects">
        Projects
      </nuxt-link>
    </div>
  </vue-flip>
  </no-ssr>
  </div>
</div>
</template>
<script>
import VueFlip from 'vue-flip'
export default {
  components: {
    VueFlip
  },
  data:()=>({hovered: false}),
  computed: {
    title(){
      return this.hovered ? 'I am a well-rounded [maker, developer, technician, problem solver, espresso enthusiast] interested in Web Development & Data Science' : 'Colin McNeil'
    }
  },
  methods: {
    hover(){
      setTimeout(()=>{this.hovered=true}, 300)
    }
  }
}
</script>
<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.menu {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 440px;
  width: 440px;
  justify-content: center;
}
.menu > * {
  margin: 5px;
  
  width: 140px;
  height: 220px;
  flex-basis: 140px;
}
.card.home {
  background-color: #4e341d;
}
.card {
  width: 140px;
  min-height: 220px;
  border: solid black 2px;
  height: calc(220px - 2em);
}
.card.home {
  padding: 0;
}
.card img {
  width: 140px;
}
.card-back{
  background-color: black;
  color:white;
  display: flex;
  justify-content: center;
}
.link {
  color: white;
  font-size: 2em;
}
.about {
  font-size: 2em;
  width: 280px;
  min-height: 50px;
  padding: 5px;
  text-align: center;
  background-color: black;
  color: white;
  transition: ease 0.2s all;
  margin-bottom: 10px;
}
.about:hover {
  font-size: 1.3em;
  min-height: 100px;
}
</style>
