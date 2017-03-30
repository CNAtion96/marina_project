(() => {

    if(localStorage.getItem('token')){
       
    }
    
    $("form").on('submit',(e)=>{
        e.preventDefault();
        // Need to get user and password here
        var username = $("#username").val();
        var password = $("#password").val();

        $.ajax({
            url: "https://tiyagencyweek.herokuapp.com/auth/login",
            type:"POST",
            data: {username,password},
            success: function(result){
                if(result.error) return alert("YOU SUCK");
                localStorage.setItem('token',result.token);
                // Something should happen here
                console.log(localStorage.getItem('token'));
                window.location = "localhost:3000/dashboard.html";
        }});
    })
})();