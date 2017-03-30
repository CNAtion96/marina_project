
var token = localStorage.getItem('token');

$.ajax({

	url:'https://tiyagencyweek.herokuapp.com/blogs',
	type: 'get',
	headers:{X_CSRF_TOKEN: token},

	success:function(response){
		console.log(response);

		response.blogs.forEach(function(blog){
			$('#blogHead1').append(`
				<div class="blogs">
			<h2>${blog.title}</h2>	
			<p>${blog.description}</p>`)
		})
		}
}	);

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

