<template>
  <div>
    <div id="projects">
      <h1>Projects</h1>
      <div v-show="projects==[]">Loading...</div>
      <v-min-tile-grid>
        <v-min-tile class= "project" title="Legend">

          <div class="icon" title="Hacktoberfest PR">🎃 Hacktoberfest PR</div>
          <div class="icon" title="Open Source Fork">👐 Open Source Fork</div>
          <div class="icon" title="Merged PR">🔥 Merged PR</div>
        </v-min-tile>
        <v-min-tile class= "project" v-for="project in projects"
        v-bind:key="project.name" :title="project.name">
          <h4 class="desc">{{project.description}}</h4>
          <div class="meta" :style="{
            borderColor:$store.state.theme.secondaryColor,
            color: $store.state.theme.secondaryColor}">
            <div>{{project.size+" "}} lines</div>
            <div><a :href="project.displayURL" target="_blank" rel="noopener">URL</a></div>
            <div class="icon" v-if="project.hacktoberfest" title="Hacktoberfest PR">🎃</div>
            <div class="icon" v-else-if="project.fork" title="Open Source Fork">👐</div>
            <div class="icon" v-if="project.merged" title="Merged PR">🔥</div>
          </div>
        </v-min-tile>
      </v-min-tile-grid>
    </div>
    <router-link id="back" to="/menu">back</router-link>
  </div>
</template>

<script>
import { VMinTileGrid, VMinTile } from 'mina-vue'
require('es6-promise').polyfill()
require('isomorphic-fetch')

const byDate = (a, b) => {
  let date1 = Date.parse(a.updated_at)
  let date2 = Date.parse(b.updated_at)
  return date2 - date1
}
const mySquaredLabsRepos = [
  'squaredlabs.uconn.edu',
  'illustration-webform',
  'tech-workorder-form'
]
const myHacktoberfestRepos = [
  'weatherapp',
  'helectron',
  'sqleton',
  'Minimal-Notes'
]
const myMergedRepos = [
  'weatherapp',
  'Minimal-Notes',
  'tplink-cloud-api',
  'Epiboard',
  'Android-Messages-Sleek',
  'rplace'
]
export default {
  name: 'Projects',
  async mounted () {
    const myReposURL = 'https://api.github.com/users/colinmcneil/repos'
    const squaredLabsReposURL = 'https://api.github.com/orgs/squaredlabs/repos'
    let myReposRaw = await fetch(myReposURL)
    let myRepos = await myReposRaw.json()

    let squaredLabsReposRaw = await fetch(squaredLabsReposURL)
    let squaredLabsRepos = await squaredLabsReposRaw.json()
    squaredLabsRepos = squaredLabsRepos.filter(current => {
      return mySquaredLabsRepos.includes(current.name)
    })

    this.projects = myRepos
      .concat(squaredLabsRepos)
      .sort(byDate)
      .map(project => {
        project.displayURL = project.url.replace(
          'api.github.com/repos',
          'github.com'
        )
        if (myHacktoberfestRepos.includes(project.name)) { project.hacktoberfest = true }
        if (myMergedRepos.includes(project.name)) { project.merged = true }
        return project
    })
  },
  data () {
    return {
      projects: [],
      hovered: false
    }
  },
  methods: {
    projectHover (event) {
      setTimeout(() => {
        this.hovered = true
      }, 300)
    },
    projectLeave () {
      this.hovered = false
    },
    projectClick (url) {
      if (this.hovered) {
        window.open(url, '_blank')
      }
    }
  },
  components: {
    VMinTileGrid,
    VMinTile
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poiret+One");
@import url('https://fonts.googleapis.com/css?family=Inconsolata');
#projects {
  font-family: "Inconsolata";
  position: absolute;
  top: 50%;
  left: 50%;
  height: 70%;
  transform: translate(-50%, -50%);
  text-align: center;
  overflow-y: auto;
  padding: 1em;
}
.project {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
  min-width: 300px;
}
.desc {
  padding: 0.2em;
}
.meta {
  display: flex;
  justify-content: space-around;
}
.project .imgContainer {
  width: 50%;
  transform: translateX(50%);
  cursor: pointer;
}
#back {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  color: black;
  font-family: "Poiret One";
  font-size: 2em;
  transition: ease-in-out 0.3s all;
  background-color: white;
  padding: 5px;
}
#back:hover {
  cursor: pointer;
  opacity: 1;
  padding: 10px;
}
.icon {
  cursor: default;
}
@media only screen and (max-width: 500px) {
  #projects {
    width: 100%;
    height: 300px;
    transform: translate(-50%, -70%);
  }
}
</style>
<style>
.project .titleBar {
  padding: 0.5em;
  font-size: 0.7em;
}
.project h2 {
  font-family: "Poiret One";
  margin-bottom: 5px;
  font-size: 2em;
}
.project a {
  text-decoration: none;
}
</style>
