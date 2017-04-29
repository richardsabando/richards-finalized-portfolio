$('#submit').click(function (evt) {
    evt.preventDefault();
   var $searchField = $('#search');
   var $submitButton = $('#submit');
   
   $searchField.prop("disabled",true);
   $submitButton.attr("disabled",true).val("searching....");
    // the AJAX part
    var spotifyAPI = "https://api.spotify.com/v1/search";
    var artist = $searchField.val();
    var spotifyOptions = {
                q: artist,
                "type":"album",
                "limit": 10
    };
    function displayAlbums(data) {
      var spotifyHTML = '<ul>';
      $.each(data.albums.items,function(i,album) {
        console.log(data.albums.items);  
        spotifyHTML += '<li class="grid-25 tablet-grid-50 ">';
        spotifyHTML += '<a href= "' + album.images[0].url + '" data-lightbox="image" data-title="' +  album.artists[0].name +'" >';
          
        spotifyHTML += '<img src="' + album.images[0].url + '"></a></li>';
      }); // end each
        
      spotifyHTML += '</ul>';
      $('#photos').html(spotifyHTML);
       $searchField.prop("disabled",false);
       $submitButton.attr("disabled",false).val("search");
    }
    $.getJSON(spotifyAPI, spotifyOptions, displayAlbums);
    
      if ( $searchField.val() === "" || $('ul').length < 1  ) {
       
        alert("please enter a search term and try again");
         $searchField.prop("disabled",false);  
         $submitButton.attr("disabled",false).val("search");  
      }
    
     
  }); // end click

   lightbox.option({
        'alwaysShowNavOnTouchDevices': true,
        'resizeDuration': 200,
        'fitImagesInViewport': true,
        'wrapAround': true,
        'disableScrolling': true,
       
        'albumLabel':  `Album-type: Album, 
                        Derived from: Spotify, 
                        Format: MP3 
                                        `
       
      });

