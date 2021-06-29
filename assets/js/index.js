var slider_show = document.getElementById("slider-show-img");
var slider_1 = document.getElementById("slider1");
var slider_2 = document.getElementById("slider2");
var slider_3 = document.getElementById("slider3");
var slider_4 = document.getElementById("slider4");
var slider_5 = document.getElementById("slider5");
var slider = [slider_1, slider_2, slider_3, slider_4, slider_5];
slider[0].classList.add("slider-control--current", "slider-show__img--effect");
setInterval(function() {
    var img_id = slider_show.getAttribute('src');
    var len = img_id.length;
    var id = parseInt(img_id.charAt(len - 5));
    for (var i = 0; i < 5; i++) {
        slider[i].classList.remove("slider-control--current", "slide-show__img--effect");
    }
    if (id === 5) {
        slider_show.setAttribute("src", "../assets/img/slider/1.jpg");
        slider[0].classList.add("slider-control--current", "slider-show__img--effect");
    }
    else {
        slider_show.setAttribute("src", '../assets/img/slider/' + (id + 1).toString() + '.jpg');
        slider[id.toString()].classList.add("slider-control--current", "slider-show__img--effect"); 
    }
}, 2000);
// slider-control--current