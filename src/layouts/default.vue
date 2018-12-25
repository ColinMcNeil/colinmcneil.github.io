<template>
  <div>
    <Nav class="nav"/>
    <div class="pad"></div>
    <nuxt class="content"/>
  </div>
</template>
<script>
import Nav from '~/components/nav'
export default {
  components: {
    Nav
  }
}
</script>

<style>
  html,body {
    margin: 0;
    font-family: "Poiret One";
    transition: ease 0.2s all;
  }
  .nav{
    z-index: 10;
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

  @media only screen and (max-width: 600px) {
    .pad {
      height: 250px;
    }
  }
</style>
