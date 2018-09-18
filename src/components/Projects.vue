<template>
    <div>
        <div id="projects">
            <transition-group name="fade">
            <div class= "project" v-for="project in projects" v-bind:key="project.name">
                <h2><a :href="project.displayURL" target="_blank" rel="noopener">{{project.name}}</a></h2>
                <h4>{{project.description}}</h4>
                <div class="meta">
                  {{project.size+" "}} lines
                </div>
            </div>

            </transition-group>
        </div>
        <router-link id="back" to="/menu">back</router-link>
    </div>
</template>

<script>
require('es6-promise').polyfill()
require('isomorphic-fetch')
const byDate = (a, b) => {
  let date1 = Date.parse(a.updated_at)
  let date2 = Date.parse(b.updated_at)
  return date2 - date1
}
const mySquaredLabsRepos = ['squaredlabs.uconn.edu', 'illustration-webform', 'tech-workorder-form']
export default {
  name: 'Projects',
  async mounted () {
    const myReposURL = 'https://api.github.com/users/colinmcneil/repos'
    const squaredLabsReposURL = 'https://api.github.com/orgs/squaredlabs/repos'
    let myReposRaw = await fetch(myReposURL)
    let myRepos = await myReposRaw.json()

    let squaredLabsReposRaw = await fetch(squaredLabsReposURL)
    let squaredLabsRepos = await squaredLabsReposRaw.json()
    squaredLabsRepos = squaredLabsRepos.filter((current) => {
      return mySquaredLabsRepos.includes(current.name)
    })

    this.projects = myRepos.concat(squaredLabsRepos).sort(byDate)
      .map((project) => {
        project.displayURL =
          project.url.replace('api.github.com/repos', 'github.com')
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
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poiret+One");
#projects {
  font-family: "Consolas";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
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
}
.project * {
  margin-top: 10px;
}
.project h2 {
  font-family: "Poiret One";
  margin-bottom: 5px;
  font-size: 2em;
}
.project a {
  text-decoration: none;
}
.project .imgContainer {
  width: 50%;
  transform: translateX(50%);
  cursor: pointer;
}
.project .imgContainer img {
  max-height: 90%;
  max-width: 100%;
  transition: all 0.3s;
}
.project .imgContainer .desc {
  transition: all 0.3s;
  font-size: 1rem;
  width: 100%;
  opacity: 0;
  position: absolute;
  font-family: "Consolas";
  top: 0px;
  transform: translateY(8em);
}
.project .imgContainer:hover .desc {
  display: block;
  opacity: 1;
  transform: translateY(1em);
}
.project .imgContainer:hover img {
  opacity: 0.1;
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
.meta {
  font-size: 1em;
}
.arrow {
  font-size: 1em;
}
.count {
  font-family: "Consolas";
  font-size: 1em;
  margin: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media only screen and (max-width: 500px) {
  #projects {
    width: 100%;
    height: 300px;
    transform: translate(-50%, -70%);
  }
  #count {
    display: none;
  }
  #meta {
    display: none;
  }
  #scrollbarHide {
    display: none;
  }
  .project .imgContainer {
    height: 180px;
  }
}
</style>
