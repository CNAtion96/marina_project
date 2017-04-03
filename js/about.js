$('.carousel').carousel()
$("#header").headroom({
  "offset": 205,
  "tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "bounceInDown",
    "unpinned": "bounceOutUp"
  }
});
// $("#header").headroom("destroy");





// response.forEach(function(weather) {

    // <img src="${response.weather[0].icon} alt="">