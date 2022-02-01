var timer = document.getElementById('timer');
var appendSeconds = document.getElementById('seconds');
var appendMiliseconds = document.getElementById('miliseconds');
var seconds = 00;
var miliseconds = 00;
var value = 0;
var interval;

runStart = function() {
	miliseconds++;
  
  // Formatting the "miliseconds" part to look right
  if (miliseconds <= 9) {
  	appendMiliseconds.innerHTML = "0" + miliseconds;
  }
  if (miliseconds > 9) {
  	appendMiliseconds.innerHTML = miliseconds;
  }
  if (miliseconds > 99) {
  	seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    miliseconds = 0;
    appendMiliseconds.innerHTML = "0" + miliseconds; 
  }
  if (seconds > 9) {
  	appendSeconds.innerHTML = seconds;
  }
}

function start() {
	clearInterval(interval);
  interval = setInterval(runStart, 10);
}

function stop() {
	clearInterval(interval);
}

function reset() {
	clearInterval(interval);
	miliseconds = 0;
  appendMiliseconds.innerHTML = "0" + miliseconds;
  seconds = 0;
  appendSeconds.innerHTML = "0" + seconds;
}