<template>
  <div class="resumeContainer" v-html="resumeHTML"/>
</template>
<script>
import showdown from 'showdown'

require('es6-promise').polyfill()
require('isomorphic-fetch')

export default {
  async asyncData () {
    let converter = new showdown.Converter()
    const URL =
      'https://gist.githubusercontent.com/ColinMcNeil/f005dd49aff4aece29677103f36e5f5e/raw/Resume.md'
    let res = await fetch(URL)
    let rawMD = await res.text()
    return {resumeHTML: converter.makeHtml(rawMD)}
  },
  data() {
    return {resumeHTML: 'Loading'}
  }
}
</script>
<style scoped>
.resumeContainer {
  overflow-y: auto;
  position: relative;
  border: solid black 1px;
  padding: 20px;
  font-family: "Inconsolata";
  font-weight: 500;
  width: 80%;
  left: 10%;
  margin-bottom: 2em;
  transition: ease 0.2s all;
}
@media only screen and (max-width: 600px) {
  .resumeContainer {
    margin: 10px;
    left: 0;
    border: none;
  }
}
</style>

