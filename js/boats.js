$.ajax({
    url: "https://tiyagencyweek.herokuapp.com/boats",
    success: function(response) {
        console.log(response);
        response.boats.forEach(function(boat) {
            $('#boats').append(`

                <div class="col-md-3 boatRow">
                    <div id="info" class="repoTabLeft">
                        <div id="index">
                            <img  class="activityPic" src="${boat.picture}" alt="">
                        </div>
                        <span id="text" class="text">
                            <h4 id="name">${boat.name}</h4>
                            <h5 class="description">${boat.description}</h5>
                            <h5>Boat Colors</h5>
                            <ul id="boatColors">
                                <li id="color_one"></li>
                                <li id="color_two"></li>
                                <li id="color_three"></li>
                                <li id="color_four"></li>
                            </ul>
                            <span id="price">$<span id="num">${boat.price}</span></span>
                        </span>
                        <button class="learnmore">Request a Test Drive</button>
                    </div>
                </div>

                `);
        })
    }
});


// $('#myModal').modal(options)

$("body").on('click', ".learnmore", function(){
  var title = $(this).data("title");
  var content = $(this).data("content");
  
  $(".modal-title").html(title);
  $(".modal-body").html(content);
  $('.modal').modal('toggle');
  
})






// <h4 class="charactername"><a href="${repo.html_url}">${repo.name}</a></h4>
//               <h6 class="description">${repo.description}</h6>
//               <h6 class="updatedAt">${moment(repo.updated_at).from()}</h6>
//             </div>
//             <div class="col-md-6 repoTabRight"
//                 <h5 class="language">${repo.language}</h5>
//             </div>
