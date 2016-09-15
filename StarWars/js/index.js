var observable;
var darthVaderElement;
var lukeElement;
var leiaElement;
var yodaElement;
var resetElement;

$(document).ready(function() {
  
  // creation de l'observable
  observable = new Observable();

  // creation de l'observer darthVader
  darthVaderElement = new DarthVaderObserver($('#darthVader'))
  	.register(observable)
  	.init()
  ;

  // creation de l'observer Luke
  lukeElement = new LukeObserver($('#luke'))
    .register(observable)
    .init()
  ;

  // creation de l'observer Leia
  leiaElement = new LeiaObserver($('#leia'))
    .register(observable)
    .init()
  ;

  //creation de l'observer Yoda
  yodaElement = new YodaObserver($('#yoda'))
      .register(observable)
      .init()
  ;
    /*var audio = new Audio('wav/Star Wars Theme Song By John Williams.mp3');
    audio.play();
    audio.volume = 0.2;*/
/*
   // creation de l'observer Reset
  resetElement = new ResetObserver($('#raz'))
    .register(observable)
    .init()
  ;
  */
});

