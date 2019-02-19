<template>
  <div>
    <Nav v-if="!home" class="nav"/>
    <div v-if="!home" class="pad"></div>
    <nuxt class="content"/>
  </div>
</template>
<script>
import Nav from '~/components/nav'
export default {
  components: {
    Nav
  },
  data(){
    const home = this.$router.currentRoute.name === 'index'
    return {home}
  },
  watch: {
    $route: function(route) {
      this.home = route.name === 'index'
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
  }
  .pad {
    height: 150px;
  }
  .page-enter-active, .page-leave-active {
    transition: all .2s
  }
  .page-enter, .page-leave-active {
    transform: translateY(200%);
    filter: blur(2px);
  }

</style>
