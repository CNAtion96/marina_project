$('.carousel').carousel()
$("#header").headroom({
  "offset": 205,
  "tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp"
  }
});





// response.forEach(function(weather) {

    // <img src="${response.weather[0].icon} alt="">