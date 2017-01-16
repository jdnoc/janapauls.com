$(window).load(function () {

    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(550).css({
        'overflow': 'visible'
    });


    //  isotope
    // var $container = $('.portfolio_container');
    // $container.isotope({
    //     filter: '*',
    // });

    // $('.portfolio_filter a').click(function () {
    //     $('.portfolio_filter .active').removeClass('active');
    //     $(this).addClass('active');

    //     var selector = $(this).attr('data-filter');
    //     $container.isotope({
    //         filter: selector,
    //         animationOptions: {
    //             duration: 500,
    //             animationEngine: "jquery"
    //         }
    //     });
    //     return false;
    // });

    // back to top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    // input
    $(".input-contact input, .textarea-contact textarea").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".input-contact input, .textarea-contact textarea").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });
});

// var tag = document.createElement('script');
//         tag.src = 'https://www.youtube.com/player_api';
// var firstScriptTag = document.getElementsByTagName('script')[0];
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// var tv,
//         playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
// var vid = [
//             {'videoId': 'Mgf-ySyA56U', 'startSeconds': 0, 'endSeconds': 20, 'suggestedQuality': 'hd720'},
//             {'videoId': 'pEQEBQ8oUZ4', 'startSeconds': 630, 'endSeconds': 640, 'suggestedQuality': 'hd720'},
//             {'videoId': '43PUxEvSdX8', 'startSeconds': 260, 'endSeconds': 280, 'suggestedQuality': 'hd720'},
//             {'videoId': 'pydwKHWrDo4', 'startSeconds': 55, 'endSeconds': 75, 'suggestedQuality': 'hd720'},
//             {'videoId': 'vRpS78iObTM', 'startSeconds': 15, 'endSeconds': 35, 'suggestedQuality': 'hd720'},
//         ],
//         randomVid = Math.floor(Math.random() * vid.length),
//     currVid = randomVid;

// $('.hi em:last-of-type').html(vid.length);

// function onYouTubePlayerAPIReady(){
// tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
// }

// function onPlayerReady(){
// tv.loadVideoById(vid[currVid]);
// tv.mute();
// }

// function onPlayerStateChange(e) {
// if (e.data === 1){
//     $('#tv').addClass('active');
//     $('.hi em:nth-of-type(2)').html(currVid + 1);
// } else if (e.data === 2){
//     $('#tv').removeClass('active');
//     if(currVid === vid.length - 1){
//     currVid = 0;
//     } else {
//     currVid++;  
//     }
//     tv.loadVideoById(vid[currVid]);
//     tv.seekTo(vid[currVid].startSeconds);
// }
// }

// function vidRescale(){

// var w = $(window).width()+200;
// var h = $(window).height()+200;

// if (w/h > 16/9){
//     tv.setSize(w, w/16*9);
//     $('.tv .screen').css({'left': '0px'});
// } else {
//     tv.setSize(h/9*16, h);
//     $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
// }
// }
// $(window).on('load resize', function(){
// vidRescale();
// });
