<template>
  <div id="app" v-if="welcome" :class={hover}>
    <h4> { i }&nbsp;&nbsp; am not a designer.</h4>
    <h1>welcome to my gallery</h1>
    <h1 class="enter" @mouseenter="()=>hover=true" @mouseleave="()=>hover=false"><a href="#gallery"> enter</a></h1>
  </div>
  <v-gallery v-else/>
</template>

<script>
import VGallery from './components/VGallery'
export default {
  name: 'App',
  components: { VGallery },
  data: () => ({
    welcome: true,
    hover: false
  }),
  mounted(){
    window.onhashchange = () => {
      console.log('change')
      if(window.location.hash == '#gallery') this.welcome = false
    }
    window.onhashchange()
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');
html, body {
  margin: 0;
  background: black;
  color: white;
  font-family: 'Heebo', sans-serif;
  overflow: hidden;
}
* {
  transition: ease 0.2s all;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
<style style lang="scss" scoped>

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  &.hover {
    background: white;
    color: black;
  }
  h1 {
    font-size: 8vw;
    border: solid #137547 2px;
    line-height: 2.5rem;
    margin: 20px;
    vertical-align: middle;
  }
  h4 {
    font-size: 3vw;
  }
  h1.enter:hover {
    padding: 3px;
    margin: 17px;
    color: #c75000;
    border-color: #c75000;
  }
}
</style>
<style scoped>

</style>
