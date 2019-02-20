<template>
  <div>
    <Nav :backgroundColor="backgroundColor" v-if="route!=='index'" class="nav"/>
    <div v-if="route!=='index'" class="pad"></div>
    <nuxt class="content"/>
  </div>
</template>
<script>
import Nav from '~/components/nav'
const colors = {
  contact: 'rgb(106, 182, 110)',
  resume: 'rgb(151, 121, 233)',
  projects: 'rgb(116, 213, 213)'
}
export default {
  components: {
    Nav
  },
  data(){
    return {route: this.$router.currentRoute.name}
  },
  watch: {
    $route: function(route) {
      this.route = route.name
    }
  },
  computed:{
    backgroundColor(){
      return colors[this.route]
    }
  }
}
</script>

<style>
  html,body {
    margin: 0;
    font-family: "Poiret One";
    transition: ease 0.2s all;
    height: 100%;
    width: 100%;
  }
  .pad {
    height: 150px;
  }
  .page-enter-active, .page-leave-active {
    transition: ease all 0.3s;
    will-change: opacity;
  }
  .page-enter, .page-leave-active {
    opacity: 0;
  }

</style>
