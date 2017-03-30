if(localStorage.getItem('token')){
       $("#dashboard").html(`<a href="dashboard.html">Your Dashboard</a>`);
    }
var token = localStorage.getItem('token');
console.log(token);
$.ajax({url: "https://tiyagencyweek.herokuapp.com/blogs",
    type: "get",
    headers:{X_CSRF_TOKEN: token},
    success: function(response){
        console.log(response);
        response.blogs.forEach(function(blog){
            $(".posts").append(`
            <h2>${blog.title}</h2>
            <p>${blog.description}</p>
            `)
        })
    }

})


var lastThree =response.blogs.slice(Math.max(arr.length - 5, 1))