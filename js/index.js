$("carousel").carousel({
  interval: 6000,
  pause: "hover"
});

$(document).ready(function() {
  $("#lightSlider").lightSlider({
    item: 3,
    controls: true,
    prevText: "Previous",
    nextText: "Next",
    auto: true,
    loop: true,
    speed: 3000,
    pause: 5000
  });
});
$(function() {
  $("#myCarousel").carousel({
    interval: 5000
  });
  $("#myCarousel").on("slid.bs.carousel", function(e) {
    if ($(".carousel-inner .item:last").hasClass("active")) {
      $("#myCarousel").carousel("pause");
    }
    if ($(".carousel-inner .item:first").hasClass("active")) {
      $("#myCarousel").carousel("cycle");
    }
  });
});

//Initalize and add the map
function initMap() {
  //Your location
  const loc = { lat: 42.361145, lng: -71.057083 };
  //centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc
  });
  //The marker, positioned at location
  const marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}

// // Sticky menu background Regular js
// window.addEventListener("scroll", function() {
//   if (window.scrollY > 150) {
//     document.querySelector("#navbar").style.opacity = 0.7;
//   } else {
//     document.querySelector("#navbar").style.opacity = 1;
//   }
// });
