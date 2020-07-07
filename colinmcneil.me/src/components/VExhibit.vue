<template>
<div class="exhibitContainer" :class="{more}">
    <div class="exhibit" :style="{backgroundColor}"> 
        <img :src="exhibit.image ? require(`../assets/images/${exhibit.image}`) : `https://picsum.photos/200/300?random=${color}`" :style="{opacity: more ? 0 : 1}"/>
        <div class="more" :style="{opacity: more ? 1 : 0}">
            <vue-markdown class="exhibit-content">
                {{exhibit.content || '# Nothing here?'}}
            </vue-markdown>
        </div>
    </div>
    <div class="title">{{exhibit.name || 'unknown'}}</div>
    <div class="info" @click="() => more = !more">
        {{more ? '← less' : 'more →'}}
    </div>
</div>
    
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
    components: {VueMarkdown},
    props: {color: {type: String, required: true}, exhibit: {type: Object, required: true}},
    data: () => ({
        more: false
    }),
    computed: {
        backgroundColor() {
            if(this.more) return 'rgb(100, 100, 100)'
            if(this.exhibit.color) return this.exhibit.color
            return this.color
        }
    }
}
</script>
<style lang="scss" scoped>
.exhibitContainer {
    flex: 1 1 100%;
    margin: 20% 4.125%;
    .title {
        color: black;
        font-weight: bold;
        margin-top: 30px;
        font-size: 35px;
        padding: 2px 0px;
    }
    .info {
        font-size: 25px;
        color: black;
        opacity: 0.3;
        &:hover {
            cursor: pointer;
            opacity: 0.2;
        }
    }
    .exhibit-content {
        color: white;
    }
    &.more {
        .title {
            background: black;
            color: white;
            padding-left: 10px;
        }
        .info {
            background: #c75000;
            opacity: 1;
            color: white;
            padding-left: 10px;
        }
    }
}
.exhibit {
    // background: rgb(238, 230, 230);
    height: 60vh;
    color: black;
    box-shadow: 0px 15px 15px 4px rgba(38, 38, 38, 0.5), 0px 0px 125px rgb(238, 230, 214);
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        max-height: 100%;
        border: solid white 3px;
        padding: 20px;
        box-sizing: border-box;
        height: 100%;
        object-fit: contain;
    }
    .more {
        position: absolute;
    }
}
</style>
