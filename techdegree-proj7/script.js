var supports_video = !!document.createElement('video').canPlayType;
if (supports_video) {


window.onload = function() {

	// ************VARIABLES***************
	var video = document.getElementById("player1");
  var track = document.getElementById("track");
  var paras = document.getElementsByTagName("p");




//   ***********EVENT LISTENERS***********



// Skip video to the time specified in <p>

// Loop through p elements.
for(var i = 0; i < paras.length; i++) {
    // Add listener.
    paras[i].addEventListener("click",
        function(event) {
            // Execute function.
					video.currentTime = event.target.id;
			   	video.play();
        }, false);
			}




// HIGHLIGHT TRANSCRIPT TEXT WHEN VIDEO PLAYS
video.ontimeupdate = function() {
			// get video current time
			var value = video.currentTime;

			//change TEXT TO BLACK onall p elements
			//select all p elements
			var x = document.querySelectorAll("p");
			// create i var
			var i;
			// loop through all p elements
			for (i = 0; i < x.length; i++) {
			//set all p elements TEXT TO BLACK
			x[i].style.color = "black";
			}

      if (value <= 7.535 ) {
	    document.getElementById("0.01").style.color ="orange";
       }

	    else if (value > 7.535 && value < 13.96) {
		  document.getElementById("7.535").style.color ="orange";
	     }

			else if (value > 13.96 && value < 17.94) {
		   document.getElementById("13.96").style.color ="orange";
		   }

			 else if (value > 17.94 && value < 30.92) {
 		   document.getElementById("17.94").style.color ="orange";
 		   }

			 else if (value > 30.92 && value < 41.19) {
	 		 document.getElementById("30.92").style.color ="orange";
	 		 }

			 else if (value > 41.29 && value < 53.76) {
	 		 document.getElementById("41.20").style.color ="orange";
	 		 }

			 else  {
			document.getElementById("53.76").style.color ="orange";
			}

		};// END OF transcript text highlighting



	}; // END Of Window Onload function

} // End of Support Video
