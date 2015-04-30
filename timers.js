var timer = document.getElementById("timer");
var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var begin = 0;
var addTime;


start.addEventListener("click", function(evt){
    event.preventDefault();
    addTime = setInterval(function(){
      begin++
      timer.innerHTML = "Time Elapsed: " + begin;
      }, 1000);
    })
