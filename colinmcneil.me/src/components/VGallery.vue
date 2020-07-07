<template>
    <div class="container">
        <div class="exhibits">
            <div class="page" v-for="(page, i) in layout" :key="'page' + i" :style="{transform}">
                <v-exhibit v-for="(exhibit, i) in page" :key="'Exhibit ' + i" :color="randomColor()" :style="{transform}" :exhibit="exhibit"/>
            </div>
        </div>
        <div class="controls">
            <button @click="previous">back</button>
            <button @click="next">next</button>
        </div>
    </div>
</template>
<script>

import VExhibit from './VExhibit'
import exhibits from '../assets/exhibits'
export default {
    components: {VExhibit},
    data: () => ({
        colors: ["17bebb","2e282a","cd5334","edb88b","fad8d6","aad922","6f7c12", "dad7cd","a3b18a","588157","3a5a40","344e41","261c15","f05d23"],
        exhibits,
        page: 0,
        width: window.innerWidth,
        scrolling: false
    }),
    mounted(){
        window.onresize = () => {
            this.width = innerWidth
        }
        window.onwheel = ({deltaY}) => {
            if(this.scrolling) return
            this.scrolling = true
            if(deltaY < 0) this.previous()
            else this.next()
            setTimeout(() => this.scrolling = false, 800)
        }
    },
    methods: {
        randomColor(){
            const int = Math.floor(Math.random() * this.colors.length)
            return '#' + this.colors[int]
        },
        next() {
            if(this.page < this.layout.length - 1) this.page++;
        },
        previous() {
            if(this.page > 0) this.page -= 1;
        }
    },
    computed: {
        transform() {
            return `translateX(${this.page * -1 * this.width/2}px`
        },
        layout() {
            const {width, exhibits} = this
            const exhibitWidth = 400
            const exhibitsPerPage = Math.floor(width / exhibitWidth)
            // const pages = Math.ceil(length / exhibitsPerPage)
            const layout = []
            for(let i = 0; i<exhibits.length; i += exhibitsPerPage){
                layout.push(exhibits.slice(i, i+exhibitsPerPage))
            }
            return layout
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
    button {
        border: none;
        font-size: 4vw;
        background: black;
        color: white;
        min-width: 30px;
        cursor: pointer;
        display: flex;
        padding: 5px 15px;
        border: solid black 4px;
        border-width: 5px 0px 0px 5px;
        outline: none;
    }
    button::last-of-type {
        flex-direction: row-reverse;
    }
    button:hover {
        border-top-color: #c75000;
        border-left-color: #c75000;
        color: #c75000;
    }
}
</style>
