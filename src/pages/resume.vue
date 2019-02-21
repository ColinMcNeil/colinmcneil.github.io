<template>
  <div class="container">
    <div class="resumeContainer" v-html="resumeHTML"/>
  </div>
</template>

<script>
import showdown from 'showdown'

require('es6-promise').polyfill()
require('isomorphic-fetch')

export default {
  async created() {
    let converter = new showdown.Converter()
    const URL =
      'https://gist.githubusercontent.com/ColinMcNeil/f005dd49aff4aece29677103f36e5f5e/raw/Resume.md'
    let res = await fetch(URL)
    let rawMD = await res.text()
    this.resumeHTML = converter.makeHtml(rawMD)
  },
  data() {
    return {resumeHTML: 'Loading'}
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.resumeContainer {
  overflow-y: auto;
  position: relative;
  border: solid black 1px;
  padding: 20px;
  font-family: "Inconsolata";
  font-weight: 500;
  min-width: 560px;
  flex-basis: 50%;
  margin-bottom: 2em;
  transition: ease 0.2s all;
}
@media only screen and (max-width: 600px) {
  .resumeContainer {
    border: none;
    min-width: 0;
    flex-basis: 100%;
  }
}
</style>

<style>
.resumeContainer h2 {
  text-align: center;
}
</style>
