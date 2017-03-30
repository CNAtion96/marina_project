var token = localStorage.getItem('token');
$("form").on('submit',(e)=>{
        e.preventDefault();
        var title = $("#title").val();
        var description = $("#description").val();

$.ajax({url: "https://tiyagencyweek.herokuapp.com/blogs/create",
    type: "POST",
    data: {title,description},
    headers:{X_CSRF_TOKEN: token},
    success: function(result){
        alert("Blog Posted Successfully");
    }
});
})