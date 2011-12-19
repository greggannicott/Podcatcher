$(document).ready(function() {

  var player = $("#player").get(0);

  // Check for current time every 2 seconds
  setInterval("noteCurrentTime()", 22000);
  //setInterval("noteCurrentTime()", 2000);

});

// Note where in the podcast we are every x seconds with an ajax call
function noteCurrentTime() {
  $.ajax({
    type: 'put',
    url: '/episodes/1/',
    data: 'current_time='+player.currentTime
  });
}


