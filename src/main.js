var titleComponent = new Vue({
    el: "#title",
    data() {   
        return {ready:false,loading:false}
        
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
    owl.animate({ d: owlPoints }, 900, );  
}
var toName = function () {
    if (titleComponent.animating)owl.stop()
    console.log('herp')
    owl.animate({ d: namePoints }, 900,()=>{titleComponent.ready=true}); 
}

