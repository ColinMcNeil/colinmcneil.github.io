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
function titleDataStruct(titles) {
    this.titles=titles
    this.index=0;
    this.getNext = function () {
        if (this.index == this.titles.length) { this.index = 0;}
        val = this.titles[this.index]
        this.index+=1;
        return val;
    }

}
myTitles = new titleDataStruct(['Colin McNeil','Programmer','Graphic Designer','IT Specialist','Maker','Nerd','Teacher','Colin McNeil','Okay, you can navigate away now','No seriously, this is the end','Wanna know a secret?','Click me.'])
//Function to route to the correct page. Swap is called on the hash ex: colinmcneil.me/#resume
$(document).ready(function () {
    $('#homepage').css('visibility','visible')
    //Call a variable to know the width of the window
    //var screenWidth = $(window).width();
    //$('body').css('max-width', screenWidth + 'px');

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
    generateTitleLetters(myTitles.getNext())
});

//swap(<element to swap to>)
//Function for swapping and animating swaps. All pages are kept invisible off screen while not loaded.
//When swapping, both old and new elements are rendered, placed in the screen, and ordered to that the new
//element can appear under the old one. 
//This is not the best method to do it, but I think it's faily elegant for not using any external libraries.
//Everything is rendered initially so the page transitions smoothly
function swap(element) {
    $('#mynav').css('width', $(window).width()+'px')
    if (element.attr('id') == current.attr('id')) { //Do nothing if currently on the page
        return false;
    }
    current.css('z-index', '1') //Set the CSS ordering so that the TO page is below and loaded, and the FROM page is on top
    element.css('z-index', '2')
    //current.css('visibility', 'hidden')
    element.css('visibility', 'visible')
    console.log('Swapping ' + current.attr('id') + ' with ' + element.attr('id'))
    if (order.indexOf(element.attr('id')) < order.indexOf(current.attr('id'))) {//Checks array to see what direction to animate from
        console.log('Going left')
        element.css('right', '0px')
        element.css('left', '100%')
        element.animate({left:"0px",right:'auto'}, 200, function order() {//current comes in from right 
            current.css('z-index', '0')
            current.css('visibility', 'hidden')
            current = element
        })
        current.animate({ left: "-100%", right: 'auto' }, 200, function order() {//current comes in from right 

        })
    }
    else {
        console.log('Going right')
        element.css('left', '-100%')
        element.css('right', 'auto')
        element.animate({left:'0px',right:'auto' }, 200, function order() { //element comes in from left
            current.css('z-index', '0')
            current.css('visibility', 'hidden')
            current = element
        })
        current.animate({ left: "100%", right: '0' }, 200, function order() {//current comes in from right 

        })
    }
    
}
function generateTitleLetters(title) {
    $('#titleContainer').empty()
    TitleArr = title.split('');
    writeChar(0, TitleArr)
}
function writeChar(index, characters) {
    if (index == characters.length) { setTimeout(() => { deleteChar(); }, 500); return }
    
    var myelement = $('<span class="titleLetter">' + characters[index] + '</span>')
    if (characters[index] == ' ') { $('#titleContainer').append(' ')}
    $('#titleContainer').append(myelement)
    myelement.transition({ scale: 0.5 }, 0, () => {
        myelement.transition({
            scale: 1.0
        },
            200, 'ease', () => { writeChar(index + 1, characters) })
    })
}
function deleteChar() {
    if (!$('#titleContainer').html().includes('span')) { console.log('done!');generateTitleLetters(myTitles.getNext()); return }
    var myelement = $('.titleLetter').last()
    myelement.transition({
        perspective: '100px',
        rotateY: '180deg'
    },
        100, () => { myelement.remove();deleteChar() })
    
}
$('#titleContainer').click(() => {
    myTitles = new titleDataStruct(['Very Colin McNeil', 'Much Programmer', 'So Graphic Designer', 'Very IT Specialist', 'So Maker', 'Much Nerd', 'Wow Colin McNeil', 'Okay, you can navigate away now', 'No seriously, this is the end','Much Easter Egg!','Very Wow!'])
    myTitles.index = 9;
    
    setInterval(() => {
        var colors = ['red', 'blue', 'green', 'purple', 'yellow']
        var colorIndex = Math.floor(Math.random()*4)
        $('.titleLetter').css({ 'color': colors[colorIndex] },0)
    }, 800)
    
})