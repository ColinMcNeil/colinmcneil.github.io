var menuComponent = new Vue({
    el: "#menu",
    data() {
        return { loaded: false }
    },
    methods: {
        load() {
            this.loaded = true;
            titleComponent.loaded = true;
            titleComponent.loading = false;
        }
    }
})
var titleComponent = new Vue({
    el: "#title",
    data() {   
        return { ready: false, loading: false, loaded:false}
        
    },
    methods: {
        hover() {
            this.animating = true;
            toName();
        },
        unHover() {
            this.animating = true;
            toOwl();
        },
        clicked() {
            if (!this.ready) return;
            this.loading = true;
            setTimeout(menuComponent.load,1000)
        }
    }
})


var svg = document.getElementById("owlSVG");
var s = Snap(svg);
var myname = Snap.select('#myname');
var owl = Snap.select('#owl');
var namePoints = myname.node.getAttribute('d');
var owlPoints = owl.node.getAttribute('d');

var toOwl = function () {
    titleComponent.ready = false
    if(titleComponent.animating)owl.stop()
    console.log('derp')
    owl.animate({ d: owlPoints }, 1200, mina.linear() );  
}
var toName = function () {
    if (titleComponent.animating)owl.stop()
    console.log('herp')
    owl.animate({ d: namePoints }, 1200, mina.linear(),()=>{titleComponent.ready=true}); 
}