//---------------------------------
// pochti ukral - pochti sdelal :)
//---------------------------------


// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('yt-player', {
    height: '588',
    width: '925',
    videoId: 'Y8NS-iBrh_A',
    autoplay: '1',
  });
}

$(".video-preview").on("click", function() {

    var that = this;
    $(this).addClass('hidden');
    setTimeout(function() {
        $(that).css('z-index', -1)
    }, 1000)

    $('.yt-video').removeClass('hidden');

  });

// var player;

// function initPlayer() {
//     function onYouTubeIframeAPIReady() {
//         player = new YT.Player('player', {
//             height: '588',
//             width: '925',
//             videoId: 'Y8NS-iBrh_A',
//             events: {
//                 'onReady': onPlayerReady
//             }
//         });
//     }

//     function onPlayerReady(event) {
//         event.target.playVideo();
//     }

//     $('.video-preview').on('click', function(event) {
//         event.preventDefault();
//         onYouTubeIframeAPIReady();

//         var that = this;
//         $(this).addClass('hidden');
//         setTimeout(function() {
//             $(that).css('z-index', -1)
//         }, 1000)
//     });
// }

// initPlayer();


$(document).ready(function(){
  $('.portfolio-slider').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true
  });
});

ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("y-map", {
            center: [55.720332, 37.677301],
            zoom: 15
        });
        myPlacemark = new ymaps.Placemark([55.720332, 37.677301],
           { hintContent: 'А-Я Принт', balloonContent: 'А-Я Принт' }, {iconLayout: 'default#image',iconImageHref: './imgs/pin.png', iconImageSize: [94, 104]});
        myMap.geoObjects.add(myPlacemark);
      }