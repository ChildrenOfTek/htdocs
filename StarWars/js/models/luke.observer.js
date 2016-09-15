var LukeObserver = function($el) {

    var base = this;
// On définit ici des évènements qui enverront des messages de notification(s) à tous les observers
    base.init = function() {
        $('.parler', $el).bind('click', function() {
            base.notifyObservers('luke.parler');
        });
        $('.def', $el).bind('click', function() {
            base.notifyObservers('luke.def');
        });


    };


  base.notify = function(event, parameters) {
    //console.log('Luke notify' + event);
    switch(event) {


      case 'darthVader.parler':
          $('.dialog', $el).text("Non c'est pas possible :-((  !!!! ");
          $('.lukeA', $el).toggle(500);
          $('.darthVaderA', $el).hide(500);
          $('.darthVaderB', $el).toggle(500);
        break;

      case 'darthVader.avancer':
          $('.dialog', $el).text("").toggle(1500);
          $('.dialog', $el).text("Plutot mourir !");
        break;
      case 'luke.parler':
          $('.luke', $el).hide();
          $('.dialog', $el).text('Je te jure je vais sauter !!!');
          break;

      case 'leia.telepathie':
        $('.lukeA', $el).hide();
        $('.dialog', $el).text('Nan !!!!!!');
        break;

      case 'darthVader.duel':
        $('.dialog',$el).text('').toggle(2000);
        $('#luke').animate({right:'300px'}, 1000, function(){});
          var audio = new Audio('wav/873.wav');
          audio.play();
        $('.dialog', $el).text('tzzzzzzzzzzzB');
        $('.def', $el).toggle(5000);
        break;
    case 'luke.def':
        $('.dialog',$el).text('Hyya');
        break;
    }
  };

  return base;
};
extend(LukeObserver, Observer);


// gestion de l'héritage
function extend(C, P) {
  var F = function () {};
  F = P;
  F.prototype = $.extend(P.prototype, C.prototype);
  C.prototype = new F();
  C.uber = P.prototype;
  C.prototype.constructor = C;
}