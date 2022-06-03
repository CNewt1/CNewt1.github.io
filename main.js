// Set the menu to be hidden innitially.
window.onload = function(){document.getElementById("myLinks").classList.toggle('hide')}

//toggles the sidebar from hidden to visable, and vice versa
document.getElementById("nav-toggle").addEventListener("click", function () {
    document.getElementById("myLinks").classList.toggle('hide')
})
//ready the document for JQuery use.
$(document).ready()

$(".slide-toggle > div:gt(0)").hide();
setInterval(function () {
    $('.slide-toggle > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slide-toggle')
}, 2500);

//toggles between the class 'slide-toggle' on the slideshow element, 
//effectively pausing/playing the slide show when clicked.
document.getElementById("slideshow").addEventListener("click", function () {
    document.getElementById("slideshow").classList.toggle('slide-toggle')
});

// Function to estimate the number of species that have gone extinct today based on User's local time.
//Function uses the low estimate of 150 and only accounts for whole hours, rounded down.
document.getElementById("daily-extinction").addEventListener("click", function () {
    var now = new Date();
    var hours = now.getHours();
    var result = Math.round((hours / 24) * 150);
    document.getElementById("ext-results").innerHTML = `An estimated ${result} species have gone extinct so far today.`
})

// document.getElementById("top-page").addEventListener("click", function () {
//     window.scrollTo(0, 0);
// });

//Fades out the top-page element when the window is at the top, 
//and fades the top-page element in when the page is scrolled down
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#top-page').fadeIn();
    } else {
        $('#top-page').fadeOut();
    }
});

//Returns user to the top of the page when the #top-page element is clicked.
$(document).ready(function () {
    $("#top-page").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});