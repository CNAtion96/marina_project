
var token = localStorage.getItem('token');

$.ajax({

	url:'https://tiyagencyweek.herokuapp.com/blogs',
	type: 'get',
	headers:{X_CSRF_TOKEN: token},

	success:function(response){
		console.log(response);

		response.blogs.forEach(function(blog){
			$('.content').append(`
				<div class="blogs">
			<h2>${blog.title}</h2>	
			<p>${blog.description}</p>
            </div>`)
		})
		}
}	);



