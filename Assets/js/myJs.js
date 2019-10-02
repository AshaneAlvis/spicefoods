$(document).ready(function () {

    // $('body').height($(window).height());

    // $(".navbar a").click(function () {

    //     $("body,html").animate({
    //         scrollTop: $("#" + $(this).data('value')).offset().top
    //     }, 1000)

    // })

    // $("div p a").click(function () {
    //     $("body,html").animate({
    //         scrollTop: $("#" + $(this).data('value')).offset().top
    //     }, 1000)
    // })

    // $('.navbar-nav a').on('click', function () {
    //     console.log("Click");
    //     $('.navbar-nav').find('a.active').removeClass('active');
    //     $(this).addClass('active');
    // });

    $('#home').addClass("active");

    /*
Smooth scrolling
*/
    $("#home").click(function () {
        $('html, body').animate({
            scrollTop: $("#carouselIndicator").offset().top - 60
        }, 1000);
        return false;
    });

    $("#about").click(function () {
        $('html, body').animate({
            scrollTop: $("#About").offset().top - 60
        }, 1000);
        return false;
    });

    $("#products").click(function () {
        $('html, body').animate({
            scrollTop: $("#Products").offset().top - 80            
        }, 1000);
        console.log($("#Products").offset().top - 101 );
        return false;

        
    });

    $("#contacts").click(function () {
        $('html, body').animate({
            scrollTop: $("#Contact").offset().top - 40
        }, 1000);
        return false;
    });


    $('#carouselIndicator').waypoint(function () {

        $(".navbar-nav").children().removeClass("active");
        $("#home").addClass("active");

    }, { offset: -40 });

    $('#About').waypoint(function () {

        $(".navbar-nav").children().removeClass("active");
        $("#about").addClass("active");

    }, { offset: 80 });

    $('#Products').waypoint(function () {

        $(".navbar-nav").children().removeClass("active");
        $("#products").addClass("active");

    }, { offset: 80 });

    $('#Contact').waypoint(function () {

        $(".navbar-nav").children().removeClass("active");
        $("#contacts").addClass("active");

    }, { offset: 50 });

    // $('#2').waypoint(function () {
    //     $(".to-top").addClass("visible");
    // }, { offset: 100 });


});

