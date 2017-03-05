var current = $("#homepage");
var order = ['homepage', 'contactpage', 'resumepage', 'portfoliopage'] //Array to cross-reference order when animating a swap.
$("#home").click(function () {
    swap($("#homepage"))
});
$("#contact").click(function () {
    swap($("#contactpage"))
});
$("#resume").click(function () {
    swap($("#resumepage"))
});
$("#portfolio").click(function () {
    swap($("#portfoliopage"))
});

//Function to route to the correct page. Swap is called on the hash ex: colinmcneil.me/#resume
$(document).ready(function () {
    console.log("ready!");
    var hash = location.hash;
    switch (hash) {
        case '#contact':
            swap($('#contactpage'))
            break;
        case '#resume':
            swap($('#resumepage'))
            break;
        case '#portfolio':
            swap($('#portfoliopage'))
            break;
    }
});

//swap(<element to swap to>)
//Function for swapping and animating swaps. All pages are kept invisible off screen while not loaded.
//When swapping, both old and new elements are rendered, placed in the screen, and ordered to that the new
//element can appear under the old one. 
//This is not the best method to do it, but I think it's faily elegant for not using any external libraries.
//Everything is rendered initially so the page transitions smoothly
function swap(element) {
    if (element.attr('id') == current.attr('id')) { //Do nothing if currently on the page
        return false;
    }
    current.css('z-index', '2') //Set the CSS ordering so that the TO page is below and loaded, and the FROM page is on top
    element.css('z-index', '1')
    current.css('visibility', 'visible')
    element.css('visibility', 'visible')
    element.css('left', '0px')
    console.log('Swapping ' + current.attr('id') + ' with ' + element.attr('id'))
    if (order.indexOf(element.attr('id')) < order.indexOf(current.attr('id'))) {//Checks array to see what direction to animate from
        console.log('Going left')
        current.animate({ left: "-100%" }, 200, function order() {
            current.css('z-index', '0')
            current.css('visibility', 'hidden')
            current = element
        })
    }
    else {
        console.log('Going right')
        current.animate({ left: "100%" }, 200, function order() {
            current.css('z-index', '0')
            current.css('visibility', 'hidden')
            current = element
        })
    }
}

//This function does nothing! Deprecated! Shoo! *eyes dart back and forth*
var sizevals = ["2rem", "8rem"]
$('#titlename').click(function () {
    $('#titlename').text(function (i, text) {
        console.log(text)
        var sizeval = sizevals[0]
        console.log(sizeval)
        $('#titlename').css("font-size", sizeval)
        sizevals.reverse()
        return text === "01000011 01101111 01101100 01101001 01101110 00100000 01001101 01100011 01001110 01100101 01101001 01101100" ? "Colin McNeil" : "01000011 01101111 01101100 01101001 01101110 00100000 01001101 01100011 01001110 01100101 01101001 01101100";
    })
});