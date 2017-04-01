if(localStorage.getItem('token')){
       $("#dashboard").html(`<a href="dashboard.html">Your Dashboard</a>`);
    }

var activeSlide = 0;
$(".left").click(function(){
    if(activeSlide === 0){
        activeSlide = 3;
    } else {
        activeSlide--;
    }
    $(".active").removeClass("active");
    $(".item"+activeSlide).addClass("active");
})

$(".right").click(function(){
    if(activeSlide === 3){
        activeSlide = 0;
    } else {
        activeSlide++;
    }
    $(".active").removeClass("active");
    $(".item"+activeSlide).addClass("active");
})




var token = localStorage.getItem('token');
console.log(token);
$.ajax({url: "https://tiyagencyweek.herokuapp.com/blogs",
    type: "get",
    headers:{X_CSRF_TOKEN: token},
    success: function(response){
        console.log(response);
        var lastThree =response.blogs.slice(Math.max(response.blogs.length - 3, 0))
        console.log(lastThree);
        lastThree.forEach(function(blog){
            $(".blogs").append(`
            <h4>${blog.title}</h4>
            <p>${blog.description}</p>
            <hr>
            `)
        })
    }

})

jQuery(function() {

    getData("brookville indiana");

    function getData(city) {

        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=imperial&cnt=6&APPID=b5004642f125f0706b3f6d7616fa2635`,
            success: function(response) {
                console.log(response);
                
                    $('#weather').append(`
                
                  <h4 class="snowstorm">${response.main.temp}℉</h4>

                          
              `);
                }
            }
        )
    }

});

