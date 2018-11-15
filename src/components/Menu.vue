<template>
  <div id="menu">
    <transition name="fade">
      <div
        v-if="loaded"
        id="viewContainer"
        :class="{expandedView:expanded}" >
        <h1
          :class="{expanded:expanded,hidden:hidden,expandedMenu:expandedMenu}"
          class="menuTitle"
          v-html="view"/>
      </div>
    </transition>
    <div
      :class="{expandedItems:expanded}"
      class="menuItems"
      @mouseover="expandedMenu=true"
      @mouseleave="expandedMenu=false">
      <transition name="fade-slow">
        <div
          v-if="loaded"
          :class="{expandedItems:expanded,expandedMenu:expandedMenu}"
          class="menuBar">
          <a
            id="resume"
            :class="{selected:viewIndex===0}"
            class="menuItem"
            @mouseover="mouseOver(0)"
            @mouseleave="mouseLeave"
            @click="loadView(0)">resume</a>
          <a
            id="contact"
            :class="{selected:viewIndex===1}"
            class="menuItem"
            @mouseover="mouseOver(1)"
            @mouseleave="mouseLeave"
            @click="loadView(1)">contact</a>
          <a
            id="projects"
            :class="{selected:viewIndex===2}"
            class="menuItem"
            @mouseover="mouseOver(2)"
            @mouseleave="mouseLeave"
            @click="loadView(2)">projects</a>
          <a
            v-if="expanded"
            id="back"
            class="menuItem"
            @mouseover="mouseOver(-1)"
            @mouseleave="mouseLeave"
            @click="loadView(-1)">back</a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import showdown from 'showdown'

require('es6-promise').polyfill()
require('isomorphic-fetch')

export default {
  name: 'Menu',
  props: {skip: {type: Boolean, required: false, default: false}},

  data () {
    if (this.skip) {
      setTimeout(() => {
        this.loadView(0)
      }, 500)
    }
    return {
      loaded: true,
      resume: 'Loading...',
      view: '<span class="defaultMenu">my stuff.</span>',
      expanded: false,
      menuClickable: this.skip,
      hoveredIndex: this.skip ? 0 : -2,
      hidden: false,
      expandedMenu: false,
      viewIndex: -1
    }
  },
  async mounted () {
    let converter = new showdown.Converter()
    const URL =
      'https://gist.githubusercontent.com/ColinMcNeil/f005dd49aff4aece29677103f36e5f5e/raw/Resume.md'
    let res = await fetch(URL)
    let rawMD = await res.text()
    this.resumeHTML = converter.makeHtml(rawMD)
  },

  methods: {
    loadView (view) {
      if (!this.menuClickable || this.hoveredIndex !== view) return
      this.viewIndex = view
      this.menuClickable = false
      this.expanded = true
      this.expandedMenu = false
      if (view === -1) {
        this.hidden = true
        this.expanded = false
        this.hoveredIndex = -2
        setTimeout(() => {
          this.hidden = false
        }, 300)
        setTimeout(() => {
          this.view = `<span class="defaultMenu">my stuff.</span>`
        }, 300)
        return
      }
      this.menuClickable = false
      if (view === 0) {
        setTimeout(() => {
          this.view = `<div id="resumeContainer">${this.resumeHTML}</div>`
        }, 300)
      }
      if (view === 1) {
        setTimeout(() => {
          this.view = `<div id="contactContainer">
                <h1>contact</h1>
                <div class="hireContainerI">
                  <p><strong>[contact me]</strong></p>
                  <p>
                  <a href="https://github.com/colinmcneil" target="_blank">
                    githhub.com/colinmcneil
                  </a>
                  | 
                  <a href="https://github.com/squaredlabs" target="_blank">
                    github.com/squaredlabs</p>
                  </a>
                  <p>860-338-5383</p>
                  <p>colinmcneil@gmail.com | colin@uconn.edu</p>
                  <p>Andover, CT</p>
                </div>
              </div>`
        }, 300)
      }
      if (view === 2) {
        setTimeout(() => {
          this.$router.push('projects')
        }, 300)
      }
      if (view === 3) {
        setTimeout(() => {
          this.view = `<div id="hireContainer">
                <h1>need a site?</h1>
                <p><strong>I can make it.</strong></p>
                <div class="hireContainerI">
                  <p><strong>[static]</strong></p>
                  <p>portfolios | resumes | personal pages</p>
                  <p>250$</p>
                </div>
                <div class="hireContainerI">
                  <p><strong>[dynamic]</strong></p>
                  <p>web apps | databases | accounts</p>
                  <p>contact for $</p>
                </div>
                <div class="hireContainerI">
                  <p><strong>[support]</strong></p>
                  <p><strong>free</strong> for first month</p>
                  <p>30$/hr</p>
                </div>
              </div>`
        }, 300)
      }
    },
    mouseOver (index) {
      setTimeout(() => {
        this.menuClickable = true
      }, 300)
      this.hoveredIndex = index
    },
    mouseLeave (index) {
      this.menuClickable = false
      this.hoveredIndex = -2
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poiret+One");
@import url('https://fonts.googleapis.com/css?family=Inconsolata');
.menuTitle {
  font-family: "Poiret One";
  position: absolute;
  display: flex;
  justify-content: center;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -110%);
  font-size: 5em;
  width: calc(25rem + 24px);
  border: solid black 3px;
  border-bottom: none;
  margin: 0;
  text-align: center;
  box-sizing: border-box;
  padding-bottom: 10px;
  transition: ease all 0.2s;
}

.defaultMenu  {
  background-color: black;
  width: 90%;
  display: block;
  margin-top: 1rem;
  color: white;
}

.expandedMenu {
  /* width:30rem; */
  width: calc(30rem + 24px);
  top: 35%;
}

.hidden {
  transform: translate(-50%, -1000%);
}

.expanded {
  display: flex;
  justify-content: center;
  overflow-y: auto;
  width: 90%;
  height: auto;
  top: 10px;
  transform: translateX(-50%);
  font-size: 1em;
  text-align: left;
  border: none;
  box-sizing: border-box;
  padding: 10px;
}

.expanded:hover {
  border: none;
}

#resumeContainer {
  flex: 0 1 800px;
  overflow-y: auto;
  position: relative;
  border: solid black 1px;
  padding: 20px;
  font-family: "Inconsolata";
  font-weight: 500;
  width: 100%;
  left: 0;
}

#contactContainer {
  font-size: 2em;
  text-align: center;
  max-width: 550px;
}

#hireContainer {
  font-size: 3em;
  text-align: center;
  width: 100%;
}

.hireContainerI {
  border: solid black 2px;
  margin: 10px;
  padding: 5px;
  font-weight: 500;
}

@media only screen and (max-width: 600px) {
  #hireContainer {
    font-size: 1rem;
  }
}
</style>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poiret+One");

#viewContainer {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
}

.expandedView {
  height: auto;
}

.menuItems {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: calc(44% + 20px);
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid black 3px;
  border-top: none;
  padding: 10px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.menuBar {
  font-family: "Poiret One";
  transition: ease 0.2s all;
  display: flex;
  justify-content: center;
  width: 25rem;
}

.menuItems:hover .menuBar {
  width: 30rem;
}

.lowerMenu {
  margin-top: 20px;
  justify-content: center;
}

.expandedMenu .lowerMenu {
  top: 55%;
}

.expandedItems {
  font-family: "Poiret One";
  top: 10%;
  left: 4em;
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 15rem;
  height: 5rem;
  border: none;
}

.menuItem {
  background-color: black;
  transition: ease all 0.2s;
  color: white;
  font-weight: bolder;
  width: 4em;
  line-height: 2em;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menuItem:hover {
  font-size: 3em;
  background-color: white;
  cursor: pointer;
  color: black;
}
.menuItem.selected {
  border-bottom: solid green 2px;
  margin-bottom: 5px;
}
.expandedItems .menuItem {
  height: 4em;
}
#back {
  box-shadow: inset 0px 0px 0px 5em rgb(65, 151, 77);
  color: white;
  margin-top: 5px;
}
#back:hover {
  font-size: 3em;
  box-shadow: none;
  cursor: pointer;
  color: black;
}
.hire {
  box-shadow: inset 0px 0px 0px 5em rgb(65, 151, 77);
  color: rgb(65, 151, 77);
}
.expandedItems.lowerMenu {
  display: none;
}

.fade-slow-enter-active,
.fade-slow-leave-active {
  transition: opacity 0.9s;
}
.fade-slow-enter, .fade-slow-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media only screen and (max-width: 600px) {
  .menuTitle {
    font-size: 3em;
    width: calc(15rem + 24px);
  }
  .menuTitle.expanded {
    font-size: 1em;
    width: 99%;
  }
  .expandedMenu {
    width: calc(20rem + 24px);
  }
  .menuBar {
    font-size: 0.5em;
    width: 15rem;
  }
  .menuItems:hover .menuBar {
    width: 20rem;
  }
  .lowerMenu {
    top: 47%;
  }
  .menuItem {
    font-size: 1.2rem;

  }
  .expandedItems {
    font-size: 1.5em;
    left: 2em;
    opacity: 0.7;
  }
  .expandedItems .menuItem {
    font-size: 1em;
    line-height: 1em;
  }
  .expandedItems .menuItem:hover {
    font-size: 1.5em;
  }
  #back:hover {
    font-size: 1.5em;
  }
}
</style>
