$(document).ready(function() {

    $(window).scroll(function () {
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 299) {
            $('#nav').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 300) {
            $('#nav').removeClass('navbar-fixed');
        }
    });
});

var countDownDate = new Date("Dec 24, 2017 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "J " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (days === 0) {
        document.getElementById("timer").innerHTML = hours + "h "
            + minutes + "m " + seconds + "s ";
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "poof";
    }
}, 1000);