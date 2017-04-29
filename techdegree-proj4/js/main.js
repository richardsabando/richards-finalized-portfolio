 $('#chocolat-parent').Chocolat({
     enableZoom: false
     
     
 });

///////////////////////// testing search app

$("#search").keyup(function() {
    var $search = $(this).val();
   
    $("#chocolat-parent img").each(function() {
   
        var searchAttr = $(this).attr("alt");
        if(searchAttr.toLowerCase().search($search.toLowerCase()) > -1) {
            $(this).show();
        } else {
            $(this).fadeOut();
        }
    });
});