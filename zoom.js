$(document).ready(function() {

    $("img").hover(function(){
        $(this).animate({"opacity": "1", "height": "200px"})
    }, function(){
        $(this).animate({"opacity": ".5", "height": "500px"})
    });
});