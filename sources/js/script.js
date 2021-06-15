$(function () {

    $(window).resize(() => {
        customResize()
    })
    customResize()

    $("#menu_btn").on("click", () => {
        h = $("#header").innerHeight();

        if (!activeMenu) {
            h += helph;
            console.log(h)
            activeMenu = true;
            $("#header").animate({
                height: h + "px"
            }, 400)
        } else {
            h = oldh;
            activeMenu = false;
            $("#header").animate({
                height: h + "px"
            }, 400)
        }

        $("#menu_btn").toggleClass("active")
    })

    $("#intro_slider").slick({
        dots: true
    });
    $(".phone-mask").mask("8(999) 999-99-99");

    $("#reviews__slider").slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $("#prev"),
        nextArrow: $("#next"),
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    });

})

var activeMenu = false;
var oldh = $("#header").innerHeight();
var h = 0;
var helph = 130;

function customResize() {
    if (window.innerWidth < 1500) {
        var header_navigation = $("#header_navigation").remove();
        $('#header').append(header_navigation);
        helph = 130;
    }

    if (window.innerWidth > 751) {
        $('#header').innerHeight(148);
        oldh = 148;
    }

    if (window.innerWidth > 550 && window.innerWidth < 750) {
        var header_phone = $("#header_phone").remove();
        $("#menu_btn").before(header_phone);
        $('#header').innerHeight(129);
        oldh = 129;
    }

    if (window.innerWidth < 750) {
        $('#header').innerHeight(129);
        oldh = 129;
    }

    if (window.innerWidth < 550) {
        var header_navigation = $("#header_navigation").remove();
        var header_phone = $("#header_phone").remove();
        var header_phone_btn = $("#header_phone-btn").remove();
        $('#header').append(header_navigation);
        $('#header_navigation').append(header_phone_btn);
        $('#header_phone-btn').before(header_phone);
        helph = 260;
        oldh = 65;
        $('#header').innerHeight(65);
    }

    $("#menu_btn").removeClass("active");
    activeMenu = false;

    var ss = window.innerWidth;
    ss = (ss - $(".intro .container").innerWidth()) / 2;
    ss += 15;
    $(".consultation.intro__consultation").css({
        paddingLeft: ss
    })

    var intro_height = $("#intro_consultation").innerHeight() + $("#intro_text").innerHeight();
    $(".intro__slide").innerHeight(intro_height)
    if (window.innerWidth > 750) {
        $(".intro").css({marginBottom: $("#intro_consultation").innerHeight()})
    } else {
        $(".intro").css({marginBottom: 0})
    }

    var item = document.getElementsByClassName("col-title");

    // console.log(item)

    var xxx = $(".breaking__container .col");
    console.log(xxx)

    for (var i = 0; i < xxx.length; i++) {
        console.log($(xxx[i]).find(".line")[0].offsetWidth)
        var lg = $(xxx[i]).find(".line")[0].offsetWidth;
        if (lg < 100) {
            $(xxx[i]).find(".col-title").css('min-width', '0')
        }
    }
}