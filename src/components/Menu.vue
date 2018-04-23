<template>
  <div id="menu">
      <transition name="fade">
      <div id="viewContainer" v-bind:class="{expandedView:expanded}" v-if="loaded" >
        <h1 class="menuTitle" v-bind:class="{expanded:expanded,hidden:hidden}" v-html="view"></h1>
      </div>
      </transition>
      <transition name="fade-slow">
      <div class="menuItems" v-bind:class="{expandedItems:expanded,}" v-if="loaded">
        <a id="resume" class="menuItem" v-on:mouseover="mouseOver" v-on:mouseleave="mouseLeave" v-on:click="loadView(0)">resume</a>
        <a id="contact" class="menuItem" v-on:mouseover="mouseOver" v-on:mouseleave="mouseLeave" v-on:click="loadView(1)">contact</a>
        <a id="projects" class="menuItem" v-on:mouseover="mouseOver" v-on:mouseleave="mouseLeave" v-on:click="loadView(2)">projects</a>
        <a v-if="expanded" id="back" v-on:mouseover="mouseOver" v-on:mouseleave="mouseLeave" class="menuItem" v-on:click="loadView(-1)">back</a>
      </div>
      </transition>
    </div>
</template>

<script>
  import showdown from 'showdown'
  export default {
    name: 'Menu',
    data () {
        this.getResume()
        return { 
          loaded: false, 
          resume: 'Loading...', 
          view: '<span>menu</span>', 
          expanded:false,
          menuClickable:false,
          hidden:false,
        }
    },
    methods: {
        load () {
            this.loaded = true
        },
        getResume () {
            let converter = new showdown.Converter()
            let url = 'https://gist.githubusercontent.com/ColinMcNeil/f005dd49aff4aece2'+
            '9677103f36e5f5e/raw/a260fccab911db7d5b26e95d7c66d0fedddf7f65/Resume.md'
            this.$http.get(url).then(response => {
                let data = response.body
                this.resumeHTML=converter.makeHtml(data);
                
                
            }, response => {
                console.error(JSON.stringify(response))
            })
        },
        loadView (view) {
          if(!this.menuClickable) return
          this.menuClickable=false;
          this.expanded=true;
          if (view === -1) {
            this.hidden=true;
            this.expanded = false
            setTimeout(()=>{
              this.hidden=false;
            },300)
            setTimeout(()=>{
              this.view = `<span>menu</span>`
            },300)
            return
          }
          
          this.menuClickable=false;
          if (view === 0) {
            setTimeout(()=>{
              this.view = `<div id="resumeContainer">${this.resumeHTML}</div>`
            },300)
            //
          }
          if (view === 1) {
            setTimeout(()=>{
              this.view = `<div id="contactContainer">Contact</div>`
            },300)
            //
          }
          if (view === 2) {
            setTimeout(()=>{
              this.view = `<div id="projectsContainer">Projects</div>`
            },300)
            //
          }
        },
        mouseOver(){
          setTimeout(()=>{
            this.menuClickable=true
          },300)
        },
        mouseLeave(){
          setTimeout(()=>{
            this.menuClickable=false
          },300)
        }
    },
    mounted () {
      this.load()
      
    }
  }
</script>


<style>
  
  .menuTitle{
    font-family: "Wire One";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-110%);
    font-size: 10em;
    width:15rem;
    border: solid black 1px;
    margin: 0;
    text-align: center;
    box-sizing: border-box;
    transition: ease-in-out all 0.3s;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .menuTitle:hover{
    border: black dashed 1px;
  }
  .hidden{
    transform:translate(-50%,-1000%);
  }
  .expanded{
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
  .expanded:hover{
    border:none;
  }
  
  #resumeContainer{
    flex: 0 1 800px;
    overflow-y: auto;
    position: relative;
    border: solid black 1px;
    padding: 20px;
    font-family: "Consolas";
    width: 100%;
    left: 0;
  }
</style>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Wire+One');
  #viewContainer{
    width:100%;
    height: 100%;
    position: absolute;
    display:flex;
    justify-content:center;
  }
  .expandedView{
    height: auto;
  }
  
  .menuItems{
    font-family: "Wire One";
    top: 50%;
    left: 50%;
    position: fixed;
    transform: translate(-50%,-50%);
    transition: ease 0.3s all;
    display: flex;
    justify-content: space-between;
    width:15rem;
  }

  .expandedItems{
    font-family: "Wire One";
    top: 10%;
    left: 80px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    flex-direction:column;
    width: 10rem;
    height: 5rem;
  }
  .menuItem{
    box-shadow: inset 0px 0px 0px 5em black;
    transition: ease-in-out all 0.3s;
    width: 4em;
    text-align: center;
    display: block;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .menuItem:hover{
    font-size: 2em;
    box-shadow: none;
    cursor: pointer;
  }
  .expandedItems .menuItem{
    height:4em;
  }
  #back{
    box-shadow: inset 0px 0px 0px 5em rgb(65, 151, 77);
    color: rgb(65, 151, 77);
  }
  #back:hover{
    font-size: 2em;
    box-shadow: none;
    cursor: pointer;
    color:black;
  }

  .fade-slow-enter-active, .fade-slow-leave-active {
    transition: opacity .9s;
  }
  .fade-slow-enter, .fade-slow-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
