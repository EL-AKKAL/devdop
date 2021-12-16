/* global $ , alert , console */
$(function() {
    'use strict';

// -------------------declaration of variables-----------------------------------
        var myheader =$(".header");
        var windowHeight =$(window).height();
        var windowWidth = $(window).width();
        var captionHolderWidth = $(".captionHolder").css("width");
        var captionHolderHeight= $(".captionHolder").css("height");
        var container = $(".header .slider .navbar .container").css("width");
        var containerWidth = (windowWidth - parseInt(container))/2;
        var width = (windowWidth - parseInt(captionHolderWidth)) / 2;
        var height = (windowHeight -parseInt(captionHolderHeight)) / 2;

// -----------------------------------------------------------------------------
// --------------------make caption holder center-------------------------------
        $(".captionHolder").css("left", width);
        $(".captionHolder").css("top", height);
// -----------------------------------------------------------------------------
// -------------------make navbar center screen ----------------------------------
        $(".header .slider .navbar .container").css("left" , containerWidth);
// -----------------------------------------------------------------------------

// -------------------make header full screen ----------------------------------
         myheader.height(windowHeight);
         myheader.width(windowWidth);
// -----------------------------------------------------------------------------
         

// ------------------resizing the window----------------------------------------
    $(window).resize(function () {
// --------------------make caption holder center-------------------------------
    $(".captionHolder").css("left" , (( $(window).width() - parseInt($(".captionHolder").css("width"))) / 2));
    $(".captionHolder").css("top" , (($(window).height() - parseInt($(".captionHolder").css("height"))) / 2));
// -----------------------------------------------------------------------------
// --------------------------make navbar centered-------------------------------
$(".header .slider .navbar .container").css("left" , (( $(window).width() - parseInt($(".header .slider .navbar .container").css("width"))) / 2));

// -----------------------------------------------------------------------------
// -------------------make header full screen ----------------------------------
        myheader.height($(window).height());
        myheader.width($(window).width());
// -----------------------------------------------------------------------------
    });
// -----------------------------------------------------------------------------
// -------------------smooth slide to services ----------------------------------
$(".menu li a").click(function () {

    $("html , body").animate({
        scrollTop: $("#"+ $(this).data("value")).offset().top
    },1500);
    
})



    // make selected menu item active 

    $(".menu li").click(function () {

        $(this).addClass("active").siblings().removeClass("active");
        
    });

    //slider testimonials code
    (function SlideTestimonial() {
        
        $(".testimonials .activeSlider").each(function () {

            if(!$(this).is(":last-child"))
            {
                $(this).delay(3000).hide(1000,function () {

                    $(this).removeClass("activeSlider").next().addClass("activeSlider").show(1500);
                    SlideTestimonial();
                });
            }
            else
            {
                $(this).delay(3000).hide(1000,function () {

                    $(this).removeClass("activeSlider");
                    $(".testimonials div").eq(0).addClass("activeSlider").show(1500);
                    SlideTestimonial();
                });
            }
        });
    }());

    // make the categorie menu switchable
    $(".categories li").click(function () {

        $(this).addClass("active-categorie").siblings().removeClass("active-categorie");
    });

    // trigger mixitup
    var mixer = mixitup('.galery');

    // trigger nicescroll
    $("html").niceScroll({
        cursorcolor : '#FF6909'
    });
});

// javascript

var index,slides,captiontext,before;
index=0;
before=0;
slides = document.getElementsByClassName("slide");
captiontext=document.querySelector(".captionHolder");



function initGalery() {
    slides[index].style.opacity=1;
    captiontext.innerHTML=slides[index].querySelector(".slide .captionText").innerHTML;
}

initGalery();


function goLeft() {
    
    if(index == 0) 
    {
        before=0;
        index = slides.length-1;
    }
    else 
    {
        before=index;
        index--;
    }

        slides[before].style.opacity=0;
        slides[index].style.opacity=1;
        captiontext.innerHTML=slides[index].querySelector(".slide .captionText").innerHTML;
}
function goRight() {
    
    if(index == slides.length - 1) 
    {
        before = slides.length - 1;
        index = 0;
    }
    else 
    {
        before=index;
        index ++;
    }

        slides[before].style.opacity=0;
        slides[index].style.opacity=1;
        captiontext.innerHTML=slides[index].querySelector(".slide .captionText").innerHTML;
}

