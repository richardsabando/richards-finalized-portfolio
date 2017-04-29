var supports_video = !!document.createElement('video').canPlayType;
if (supports_video) {


window.onload = function() {

	// Video
	var video = document.getElementById("video");
  var track = document.getElementById("track");
  var total_time = document.getElementById('total-time');
  var current_Time=document.getElementById('current-time');

	// Buttons
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	var fullScreenButton = document.getElementById("full-screen");
  var closedCaptionButton = document.getElementById("captions");

	// Sliders
	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");

  // General Variables

  var play_clicked = '<img src="icons/play-icon.png" alt="play video" />';
	var pause_clicked = '<img src="icons/pause-icon.png" alt="pause video" />';
	var mute_clicked= '<img src="icons/volume-off-icon.png" alt="mute video" />';
	var unmute_clicked = '<img src="icons/volume-on-icon.png" alt="unmute video" />';
  var transcript_area = document.getElementById('transcript');





// Skip video to the time specified in span ID
  function play_to_text(event) {
  	video.currentTime = event.target.id;
  	video.play();
  }

  // Place text inside the #transcript with appropriate span and id
  	function create_transcript() {
  		var temp;
  		for (var i = 0; i < transcript_array.length; i++) {
  			// create a span element
  			temp = document.createElement('span');

  			// put the text to the span element
  			temp.innerHTML = transcript_array[i].text + ' ';

  			// set the id to the time of start of the cue
  			temp.setAttribute('id', transcript_array[i].start);

  			// append the element to transcript area
  			transcript_area.appendChild(temp);

  			// attach event listener that will run function play_to_text when span is clicked
  			temp.addEventListener('click', play_to_text);
  		}
  	}



// set the total time of the video
	video.addEventListener('loadedmetadata', function() {
	   	total_time.innerHTML = video.duration;
	});






	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); // Chrome and Safari
		}
	});


	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time / time has too many decimals places....
		video.currentTime = time;

	});


	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;

		// Update the slider value
		seekBar.value = value;


		// Update the seek bar value
		seekBar.value = value;


		// update current-time value;
		current_Time.innerHTML = timeRounder.round(video.currentTime,2);

		// highlight the appropriate transcript span
		for (var i = 0; i < transcript_array.length; i++)
      {

			// remove .highlight from all span elements first, and then
			document.getElementById(transcript_array[i].start).classList.remove('highlight');

			// find the span element with the correct id
			if (video.currentTime >= transcript_array[i].start && video.currentTime <= transcript_array[i].fin)
        {
				// append .highlight to the correct span
				document.getElementById(transcript_array[i].start).classList.add('highlight');
			  }
		  }

	});

	// Update video playback when seek bar is clicked anywhere
	seekBar.addEventListener('click', function(e) {
	   var pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
	   video.currentTime = pos * video.duration;
	});




// Closed Caption Button Click Event

closedCaptionButton.addEventListener("click", function()
    {
    if (video.textTracks[0].mode == "showing"  )
    //show Closed Captions
    {video.textTracks[0].mode = "hidden";}
    //if Captions already showing then hide them
    else { video.textTracks[0].mode = "showing"; }

    });
  };
}
