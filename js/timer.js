const timeLeftDisplay = document.querySelector('#dunkelziffer')
var abgelaufeneTimer = 0;

function convertSeconds(s) {
  var min = Math.floor(s/60);
  var sec = Math.floor (s % 60);
  timeLeftDisplay.innerHTML = `${min<10 ? '0': ''}${min}:${sec<10?'0': ''}${sec}`
}


let timeLeft = 180
var CountDown =
  setInterval(function(){
    if(timeLeft == 0){
      timeLeft = 180;
      abgelaufeneTimer++;
    }
    convertSeconds(timeLeft);
    timeLeft -= 1;
    
    console.log(abgelaufeneTimer);
  }, 1000)




