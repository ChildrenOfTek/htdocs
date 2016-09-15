// /js/app.js

var h = 0;
var m = 0;
var s = 0;

var hoursElement = document.querySelector('#hours');
var minutesElement = document.querySelector('#minutes');
var secondsElement = document.querySelector('#seconds');
<!--//
document.querySelector('#sPlus').addEventListener('click', function(e){
  setSeconds(s+1);
  display();
});
document.querySelector('#sMinus').addEventListener('click', function(e){
  setSeconds(s-1);
  display();
});
document.querySelector('#mPlus').addEventListener('click', function(e){
  setMinutes(m+1);
  display();
});
document.querySelector('#mMinus').addEventListener('click', function(e){
  setMinutes(m-1);
  display();
});
document.querySelector('#hPlus').addEventListener('click', function(e){
  setHours(h+1);
  display();
});
document.querySelector('#hMinus').addEventListener('click', function(e){
  setHours(h-1);
  display();
});//-->

document.querySelector('#time').addEventListener('click', function(e){
  var d = new Date();
  setHours(d.getHours());
  setMinutes(d.getMinutes());
  setSeconds(d.getSeconds());
  display();
});

function prettyTime(nb){
  return nb < 10 ? '0' + nb : nb;
}

function setSeconds(sec){
  s = sec;
  if(s > 59){
    s = 0;
    setMinutes(m+1);
  }
  if(s < 0){
    s = 59;
    setMinutes(m-1);
  }
}

function setMinutes(min){
  m = min;
  if(m > 59){
    m = 0;
    setHours(h+1);
  }
  if(m < 0){
    m = 59;
    setHours(h-1);
  }
}

function setHours(hr){
  h = hr;
  if(h > 23){
    h = 0;
  }
  if(h < 0){
    h = 23;
  }
}

function display(){
  //innerHTML :cette propriété fournit une manière simple 
  //de remplacer complètement le contenu d'un élément
  secondsElement.innerHTML = prettyTime(s);
  minutesElement.innerHTML = prettyTime(m);
  hoursElement.innerHTML = prettyTime(h);
}

setInterval(function(){
  setSeconds(s+1);
  display();
}, 1000);










;
