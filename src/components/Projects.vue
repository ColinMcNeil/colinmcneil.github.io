<template>
    <div>
        <div id="projects">
            <transition-group name="fade">
            <div class= "project" v-for="project in projects" v-bind:key="project.name">
                <h2>{{project.name}}</h2>
                <div class="imgContainer" v-on:mouseover="projectHover" v-on:mouseleave="projectLeave" v-on:click="projectClick(project.url)">
                    <img v-bind:src="project.icon"/>
                    <div class="desc">{{project.desc}}</div>
                </div>
                <div class="count">{{project.index}}|{{projects.length-1}}</div>
                <div v-if="project.index==0" class="meta">tap/hover image</div>
                
                
                <div v-if="project.index==0" class="meta"> arrays start at 0</div>
                <div v-if="project.index==0" class="arrow meta ">↓</div>
            </div>
            </transition-group>
        </div>
        <div id="scrollbarHide"></div>
        <router-link id="back" to="/menu">back</router-link>
        
    </div>
</template>

<script>
    let projects=[
        {
            name:"SquaredLabs.uconn.edu",
            url:"https://github.com/squaredlabs/squaredlabs.uconn.edu",
            icon:require("../assets/squaredlabs.png"),
            desc:"Developed Connect & Lab pages, as well as many other components, for the SquaredLabs site.",
        },
        {
            name:"Turtle Browser",
            url:"https://github.com/colinmcneil/turtle-browser",
            icon:"https://camo.githubusercontent.com/e7cf27340ca831dff7a8f9d5d5f1df6fa621fce7/687474703a2f2f672e7265636f726469742e636f2f57376c365379314d446f2e676966",
            desc:"A minimalist web browser with many features which uses a fraction of the memory of others. ",
        },
        {
            name:"Geographic Survey App",
            url:"https://www.engr.uconn.edu/pdf/UCONN-Senior-Design-2018-Web.pdf",
            icon:require("../assets/sdp.png"),
            desc:"Developed the backend and web portal for a Geographic Survey App for UCONN's School of Agriculture. ",
        },
        {
            name:"Aspect Ratio Tools",
            url:"https://github.com/colinmcneil/aspect-ratio-tools",
            icon:require("../assets/artools.png"),
            desc:"An NPM package which offers an extensive toolset for working with images and displays of differing aspect ratios."
        },

        {
            name:"Open Source Contributions",
            url:"https://github.com/colinmcneil/",
            icon:require("../assets/contributions.png"),
            desc:"A minimalist web browser with many features which uses a fraction of the memory of others. "
        }
    ]
    export default {
        name: 'Projects',
        data () {
            for(let i =0;i<projects.length;i++){
                projects[i].index=i;
            }
            return { 
                projects:projects,
                hovered:false,
            }
        },
        methods:{
            projectHover(){
                this.hovered=true;
            },
            projectLeave(){
                this.hovered=false;
            },
            projectClick(url){
                if(this.hovered){
                    window.open(url,'_blank')
                }
            }
        }
    }
</script>




<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Wire+One');
    #projects{
        font-family: "Consolas";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        overflow-y:auto;
    }
    #scrollbarHide{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5%;
        height: 100%;
        transform: translate(400%,-50%);
        background-color: white;
    }
    .project{
        position: relative;
        display: flex;
        flex-direction: column;
        margin-bottom: 10%;
    }
    .project *{
        margin-top: 10px;
    }
    .project h2{
        font-family: "Wire One";
        margin-bottom: 5px;
        font-size: 2em;
    }
    .project a{
        text-decoration: none;
    }
    .project .imgContainer{
        width: 50%;
        transform: translateX(50%);
        cursor: pointer;
    }
    .project .imgContainer img{
        max-height: 90%;
        max-width: 100%;
        transition: all 0.3s;
    }
    .project .imgContainer .desc{
        transition: all 0.3s;
        font-size:1rem;
        width: 100%;
        opacity: 0;
        position: absolute;
        font-family: "Consolas";
        top: 0px;
        transform: translateY(8em);
    }
    .project .imgContainer:hover .desc{
        display: block;
        opacity: 1;
        transform: translateY(1em);
    }
    .project .imgContainer:hover img{
        opacity: 0.1;
    }
    #back{
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-decoration: none;
        color: black;
        font-family: "Wire One";
        font-size: 2em;
        transition: ease-in-out 0.3s all;
        opacity: 0.5;
    }
    #back:hover{
        cursor: pointer;
        font-weight: bold;
        opacity: 1;
    }
    .meta{
        font-size: 0.5em;
        height: 0.5em;
        margin: 0.5em;
    }
    .arrow{
        font-size: 1em;
    }
    .count{
        font-famile:"Consolas";
        font-size: 1em;
        margin: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    @media only screen and (max-width: 500px) {
        #projects{
            width: 100%;
            height: 300px;
            transform: translate(-50%,-70%);
        }
        #count{
            display: none;
        }
        #meta{
            display: none;
        }
        #scrollbarHide{
            display: none;
        }
        .project .imgContainer{
                height: 180px;
        }
    }
</style>
