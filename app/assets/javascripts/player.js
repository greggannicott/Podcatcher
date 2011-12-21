$(document).ready(function() {

  var player = $("#player").get(0);

  // Check for current time every 2 seconds
  //setInterval("noteCurrentTime()", 22000);
  setInterval("noteCurrentTime()", 2000);

  // Set the audio to a certain point when the audio element has loaded
  $("#player").bind('canplay', function() {
    // Determine how far into the podcast the user is
    previous_current_time = $("#player").data("previous-current-time");
    player.currentTime = previous_current_time;
  });


});

// Note where in the podcast we are every x seconds with an ajax call
function noteCurrentTime() {
  $.ajax({
    type: 'put',
    url: '/episodes/1/',
    data: 'current_time='+player.currentTime
  });
}


