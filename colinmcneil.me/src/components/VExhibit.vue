<template>
<div class="exhibitContainer" :class="{more, less: !more, dark}" >
    <div class="exhibit" :style="{backgroundColor}" @click="() => more = !more"> 
        <img :src="exhibit.image ? require(`../assets/images/${exhibit.image}`) : `https://picsum.photos/200/300?random=${color}`" :style="{opacity: more ? 0 : 1}"/>
        <div class="morecontent" :style="{opacity: more ? 1 : 0, pointerEvents: more ? 'auto': 'none'}">
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
    props: {color: {type: String, required: true}, exhibit: {type: Object, required: true}, dark: {type: Boolean, required: true}},
    data: () => ({
        more: false
    }),
    computed: {
        backgroundColor() {
            let color = this.color
            if(this.exhibit.color) color = this.exhibit.color
            else if(this.more) color = 'rgb(250,250,250)'
            return color
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
    .info, .title {
        transform: translateY(-150% );
        z-index: 1;
    }
    &.dark {
        .info, .title {
            color: white;
        }
        .info {
            opacity: 0.8;
        }
    }
    .morecontent {
        display: flex;
        position: absolute;
        justify-content: center;
        padding: 20px;
        height: 100%;
        width: 100%;
    }
    .exhibit-content {
        color: black;
        
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
        .info, .title {
            transform: none;
            z-index: 16;
            position: relative;
        }
    }
    &.less:hover {
        .exhibit {
            box-shadow: 0px 20px 30px 10px rgba(38, 38, 38, 0.5), 0px 0px 125px rgb(238, 230, 214);
            transform: rotate3d(1, 1, 0, 15deg);
        }
        .info, .title {
            transform: none;

        }
    }
}
.exhibit {
    // background: rgb(238, 230, 230);
    max-height: 60vh;
    min-height: 450px;
    color: black;
    box-shadow: 0px 15px 15px 4px rgba(38, 38, 38, 0.5), 0px 0px 125px rgb(238, 230, 214);
    z-index: 5;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
        width: 100%;
        max-height: 430px;
        padding: 20px;
        border: double white 3px;
        box-sizing: border-box;
        height: 100%;
        object-fit: contain;
    }
    
}
</style>
<style lang="scss">
.exhibit-content {
    font-size: 0.8em;   
    width: 100%;
    padding: 20px;
    a {
        color: rgb(170, 170, 235);
        font-weight: bold;
        
    }
}
</style>
