$.ajax({url: "https://tiyagencyweek.herokuapp.com/blogs",
    success: function(response){
        console.log(response);
        
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