var hourHeading = document.getElementById("hour");
var minHeading =  document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval;
function timer() {
	msec++;
	msecHeading.innerHTML = msec;
	if (msec >= 100) {
	  sec++;
	  secHeading.innerHTML = sec;
	  msec = 0;
	} else if (sec >= 60) {
	  min++;
	  minHeading.innerHTML = min;
	  sec = 0;
	} else if (min >= 60) {
	  hour++;
	  hourHeading.innerHTML = hour;
	  min = 0;
	}
  }
  
  function start() {
	var start = document.getElementById("startbtn");
	interval = setInterval(timer, 10);
	start.disabled = true;
  }
  
  function pause() {
	var start = document.getElementById("startbtn");
	clearInterval(interval);
	start.disabled = false;
  }
  
  function reset() {
	var hour = 0;
	var min = 0;
	var sec = 0;
	var msec = 0;
	msecHeading.innerHTML = msec;
	minHeading.innerHTML = min;
	hourHeading.innerHTML = hour;
	secHeading.innerHTML = sec;
	pause();
  }