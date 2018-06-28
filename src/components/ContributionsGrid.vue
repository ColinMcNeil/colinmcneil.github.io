<template>
    <div id="page">
        <div>
          <transition-group name="tileTransition" id="grid">
            <div v-for="contribution in contributions" :key="contribution.url" class="gridTile" v-if="amExpanded(contribution) || expanded===''"
            v-on:click="expanded=contribution.url" v-bind:class="{expanded:amExpanded(contribution)}">
                <a v-if="contribution.url.length>1" :href="contribution.url" class="title"><h1 class="titleText">{{contribution.name}}</h1></a>
                <h1 v-else class="titleText">{{contribution.name}}</h1>

                <div v-if="amExpanded(contribution)" class="desc"><h2>Description</h2> {{contribution.desc}}</div>
                <div v-if="amExpanded(contribution)" class="changes"><h2>Changes</h2> {{contribution.changes}}</div>
            </div>
          </transition-group>
          <div id="back" v-on:click="back">
            <span id="backToMenuText" v-on:click="backToMenu">back to menu</span>
            <span v-if="expanded!==''" id="backText">click outside to go back</span>
          </div>
        </div>
    </div>
</template>

<script>
    const contributions = {
        TPLink: {
            name: 'TP-Link API',
            desc: 'An API to access TP-Link smart home cloud devices.',
            changes: 'Allowed it to be used on node.js, as well as using an auto-generated UUID.',
            url: 'https://github.com/adumont/tplink-cloud-api'
        },
        SinglePage: {
            name: 'Jekyll SinglePage',
            desc: 'A Jekyll theme used by many open source repositories',
            changes: 'Gave the navbar some easing transitions.',
            url: 'https://github.com/t413/SinglePaged/pull/60'
        },
        RPlace: {
            name: 'RPlace',
            desc: "A script to access Reddit's /r/place community artwork and convert it into images.",
            changes: 'Created a looping system and web request system to allow it to create timelapses.',
            url: 'https://github.com/trosh/rplace/pull/2'
        },
        SquaredLabs: {
            name: 'SquaredLabs',
            desc: 'The SquaredLabs website.',
            changes: 'Project manager and wrote most of the code.',
            url: 'https://github.com/SquaredLabs/squaredlabs.uconn.edu'
        },
        nucore: {
            name: 'NuCore',
            desc: 'A very large research management web application developed for Northwestern University.',
            changes: "Part of SquaredLabs team to port the app for UCONN's research, in turn redesigning it and adding many new features",
            url: 'https://github.com/tablexi/nucore-open/pull/1570'
        },
        blank: {
            name: 'Cool stuff soon!',
            desc: '',
            changes: '',
            url: '6'
        },
        blank1: {
            name: 'Cool stuff soon!',
            desc: '',
            changes: '',
            url: '7'
        },
        blank2: {
            name: 'Cool stuff soon!',
            desc: '',
            changes: '',
            url: '8'
        },
        blank3: {
            name: 'Cool stuff soon!',
            desc: '',
            changes: '',
            url: '9'
        }

    }
    export default {
        name: 'ContributionGrid',
        data () {
            return {
                contributions: contributions,
                expanded: '',
                allGone: false
            }
        },
        methods: {
          amExpanded (contribution) {
            return this.expanded === contribution.url // && this.allGone
          },
          back () {
            this.expanded = ''
          },
          backToMenu () {
            this.$router.push('menu')
          }
        }
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Poiret+One');
  #page {
    width:100%;
    height: 100vh;
  }
  #grid {
    max-width: 50rem;
    max-height: 50rem;
    width: 90vw;
    height: 90vw;
    top:50%;
    right: 50%;
    position: absolute;
    transform: translate(50%, -50%);
    min-width: 200px;
    min-height: 200px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-family:"Poiret One";
    z-index: 1;
  }
  #back {
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgb(128, 187, 128);
  }

  .gridTile {
    flex: 0 1 30%;
    min-height: 30%;
    height: 30%;
    border: solid black 1px;
    border-radius: 3px;
    position: relative;
    transition: ease 0.3s all;
    z-index: 1;
    background-color: white;
  }

  .gridTile:hover {
    cursor: pointer;
    background-color: rgba(175, 143, 207, 0.473);
  }

  .expanded {
    flex-basis: 100%;
    min-height: 100%;
    align-self: center;
    order: 1;
    z-index:2;

  }

  .title {
    text-decoration: none;
  }

  .titleText {
    display: flex;
    justify-content: center;
    font-size: 1.7rem;
    margin:0;
    padding: 10px;
    transition: ease 0.3s all;
  }
  .titleText:hover{
    background-color: rgba(206, 151, 0, 0.74);
    color: white;
  }
  .expanded .titleText {
    font-size: 3rem;
    padding: 20px;
  }

  .expanded .desc {
    padding: 30px;
    font-size: 2rem;
  }

  .expanded .changes {
    padding: 30px;
    font-size: 2rem;
  }

  #backText{
    position: absolute;
    font-family: "Poiret One";
    bottom: 20px;
    right: 20px;
    font-size: 2rem;
  }

  #backToMenuText {
    position: absolute;
    font-family: "Poiret One";
    top: 10px;
    left: 10px;
    font-size: 2rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.164);
    padding: 5px;
    border-radius: 3px;
    transition: ease all 0.3s;
  }
  #backToMenuText:hover{
    background-color: rgba(0, 0, 0, 0.39);
    cursor: pointer;
  }

  .tileTransition-enter-active, .tileTransition-leave-active {
    transition: all 0.2s;
    position: absolute;
  }
  .tileTransition-enter, .tileTransition-leave-to .tileTransition-leave-active {
    opacity: 0;
  }
  @media only screen and (max-width: 600px) {
    .titleText {
        font-size: 1.2rem;
    }
    .expanded .titleText {
      font-size: 1.2rem;
    }
    .expanded .desc{
      font-size: 1.2rem;
    }
    .expanded .changes{
      font-size: 1.2rem;
    }
}

</style>
