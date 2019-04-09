// Collapsing / Opening the navigation

$(function(){
    $(".nav-toggle").click(function(){
        $(".nav").css('max-width','50px');
        console.log("test");
    })
})

// Navigation points

$(document).ready(function(){
    $('.pic-container').click(function(){
        if( $(this).hasClass("keystone") ){
            $(".keystone").removeClass("active-choice");
            $(this).addClass("active-choice");
        }
        else if ( $(this).hasClass("lane") ){
            $(".lane").removeClass(".active-choice");
            $(this).addClass("active-choice");
        }
        else if ( $(this).hasClass("af") ){
            $(".af").removeClass(".active-choice");
            $(this).addClass("active-choice");
        }
        else if ( $(this).hasClass("enemy") ){
            $(".enemy").removeClass(".active-choice");
            $(this).addClass("active-choice");
        }
    })
})