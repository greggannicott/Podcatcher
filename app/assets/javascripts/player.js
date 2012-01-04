var can_note = false;
var player = null;

$(document).ready(function() {


  // Check for current time every 2 seconds
  //setInterval("noteCurrentTime()", 22000);
  setInterval("noteCurrentTime()", 2000);

  // Set the audio to a certain point when the audio element has loaded
  //$("#player").bind('canplay', function() {
    // Determine how far into the podcast the user is
    //previous_current_time = $("#player").data("previous-current-time");
    //seekable = player.seekable.end();
    //player.currentTime = previous_current_time;
    // Note that it's now safe to note the current play time
    // We wouldn't want to do it before the 'can_play' event as we'd be noting
    // 0 seconds and over-writing a previous value.
    //can_note = true;
    //alert(previous_current_time);
    //noteCurrentTime();
  //});

  // Note the current time when the user presses pause
  //$("#player").bind('pause', function() {
    //noteCurrentTime();
  //});
 
      $("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: $("#jquery_jplayer_1").data("file-url") 
          });
        },
        canplaythrough: function () {
                   $(this).jPlayer("play", 30); // start 30 seconds in...
                   can_note = true;
        },
        swfPath: "/assets",
        supplied: "mp3"
      });

      // Automatically play the file
  // Capture the currentTime if the user closes the window
//  $(window).bind('beforeunload', function() {
//    noteCurrentTime();
//  });

});

// Note where in the podcast we are every x seconds with an ajax call
function noteCurrentTime() {
  // Check whether the video 'can play'. If it can, note the current time.
  if (can_note) {
    // Only update if we're higher than 10 seconds into the podcast
    if ($("#jquery_jplayer_1").data("jPlayer").status.currentTime > 10) {
      episode_id = $("#jquery_jplayer_1").data("episode-id");
      $.ajax({
        type: 'put',
        url: '/episodes/' + episode_id + '/',
        data: 'current_time=' + $("#jquery_jplayer_1").data("jPlayer").status.currentTime
      });
    }
  }
}


