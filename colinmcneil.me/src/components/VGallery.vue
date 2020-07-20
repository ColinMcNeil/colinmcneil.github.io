<template>
    <div class="container" :class="{dark}">
        <div class="exhibits">
            <div class="page" v-for="(page, i) in layout" :key="'page' + i" :style="{transform}">
                <v-exhibit v-for="(exhibit, j) in page" :key="'Exhibit ' + j" :color="getColor(i, j)" :exhibit="exhibit" :dark="dark"/>
            </div>
        </div>
        <div class="controls">
            <button @click="previous" :style="{visibility: page > 0 ? 'visible' : 'hidden'}" class="back">
                <span class="text">back</span>  
                <span class="arrow">←</span>
            </button>
            <button @click="next" :style="{visibility: !end ? 'visible' : 'hidden'}" class="next">
                <span class="text">next</span>
                <span class="arrow">→</span>
            </button>
        </div>
        <div class="header">
            do <span>not</span> touch the art.
            <div class="dark" @click="()=>dark = !dark">{{dark ? 'lighten it up' : 'go dark'}}</div>
        </div>  
    </div>
</template>
<script>

import VExhibit from './VExhibit'
import exhibits from '../assets/exhibits'
export default {
    components: {VExhibit},
    data: () => ({
        // colors: ["3f7cac","95afba","bdc4a7","d5e1a3","e2f89c","c64191","885053","fe5f55"],
        colors: ["14342b","60935d","bab700","bbdfc5","ff579f","fb3640","247ba0","e2e2e2"],
        lastpicked: -1,
        exhibits,
        page: 0,
        width: window.innerWidth,
        scrolling: false,
        dark: false
    }),
    mounted(){
        window.onwheel = ({deltaY}) => {
            if(this.scrolling) return
            this.scrolling = true
            if(deltaY < 0) this.previous()
            else this.next()
            setTimeout(() => {if(this.scrolling) this.scrolling = false}, 800)
        }
    },
    methods: {
        getColor(i, j){
            const index = this.layout[0].length * i + j
            return '#' + this.colors[ index % this.colors.length ]
        },
        next() {
            if(this.page < this.layout.length - 1) this.page++;
        },
        previous() {
            if(this.page > 0) this.page -= 1;
        },
    },
    computed: {
        transform() {
            return `translateX(${this.page * -1 * this.width}px`
        },
        layout() {
            const {width, exhibits} = this
            const exhibitWidth = 400
            let exhibitsPerPage = Math.floor(width / exhibitWidth) || 1
            if(exhibitsPerPage > 5) exhibitsPerPage = 5
            const layout = []
            for(let i = 0; i < exhibits.length; i += exhibitsPerPage){
                layout.push(exhibits.slice(i, i+exhibitsPerPage))
            }
            return layout
        },
        end() {
            return this.page == this.layout.length - 1
        }
    }
}
</script>
<style lang="scss" scoped>
.container {
    background: #f1eeec;
    height: 100vh;
    display: flex;
    align-items: center;
    &.dark {
        background: rgb(30,30,30);
        * {
            color: white;
        }
        .exhibitContainer * {
            color: white;
        }
    }
}
.header {
    position: fixed;
    color: rgb(131, 131, 131);
    top: 0;
    left: 0;
    padding: 10px;
    text-align: center;
    font-size: 30px;
    width: 100%;
    font-family: 'Quantico';
    span {
        text-decoration: line-through;
    }
    .dark {
        font-size: 20px;
        cursor: pointer;
    }
}
.exhibits {
    display: flex;
    overflow: hidden;
    width: 100%;
}
.page {
    flex: 0 0 100vw;
    display: flex;
    justify-content: space-evenly;
    transition: ease 0.8s all;
}
.controls {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 4em;
    button {
        border: none;
        font-size: 3em;
        cursor: pointer;
        outline: none;
        padding: 0 1em;
        font-weight: bold;
        text-shadow: 2px 2px 0px #c75000;
        color: black;
        background: transparent;
    }
    button::last-of-type {
        flex-direction: row-reverse;
    }
    button:hover {
        color: #c75000;
        text-shadow: none;
    }
    button.next {
        display: flex;
        flex-direction: column;
        &:hover {
            transform: rotate(-10deg) translateY(-100%);
        }
        .text {
            display: block;
            padding-bottom: 10px;
        }
        .arrow {
            // display: block;
            transform: rotate(10deg);
        }
    }
    button.back {
        display: flex;
        flex-direction: column;
        &:hover {
            transform: rotate(10deg) translateY(-100%);
        }
        .text {
            display: block;
            padding-bottom: 10px;
        }
        .arrow {
            // display: block;
            transform: rotate(-10deg);
        }
    }
}
</style>
