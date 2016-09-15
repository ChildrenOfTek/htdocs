var DarthVaderObserver = function($el) {
// Pour éviter les problèmes de portée , utilisez «base» au lieu de «this»
// Pour référencer cette classe d'événements et de fonctions internes .

  var base = this;
// On définit ici des évènements qui enverront des messages de notification(s) à tous les observers
  base.init = function() {
    $('.parler', $el).bind('click', function() { 
      base.notifyObservers('darthVader.parler');     
    });

    $('.avancer', $el).bind('click', function() {
      base.notifyObservers('darthVader.avancer');
    });

    $('.duel', $el).bind('click', function() {
      base.notifyObservers('darthVader.duel');
    });
    
  };
// Ici la méthode notify se chargera de recevoir les notifications envoyées plus tôt
  base.notify = function(event, parameters) {

    switch(event) {

      case 'darthVader.parler':
        $('.dialog', $el).text('Je suis ton père.');
        //$('.luke').hide();
        $('.darthVaderA').hide();
        break;

      case 'darthVader.avancer':
      //  $('.darthVaderA').toggle();
        $('.dialog', $el).text('Allez donne moi la main...');
        $('.luke', $el).hide();
        $('.darthVaderA').hide();
        $('.darthVaderB').hide();
        $('.darthVaderC').toggle(3000);
        break;

      case 'luke.parler':
        $('.dialog', $el).text("Déconne pas petit elle est froide.");
        $('.darthVaderA').hide();
        $('.darthVaderB').toggle(500);
        break;

      case 'leia.telepathie':
        $('.dialog', $el).text('');
        $('.darthVaderB').toggle(500);
        break;

      case 'darthVader.duel':
        $('.dialog',$el).text('Viens te battre mon fils!');
        $('.darthVaderC').hide(500);
        $('.dialog',$el).text('').toggle(2000);
        $('#darthVader').animate({left:'300px'}, 1000, function(){});
        $('.dialog',$el).text('Bzzzzzzzzzzzt');
        break;
       
    }
  };

  return base;
};

extend(DarthVaderObserver, Observer);

// gestion de l'héritage
function extend(C, P) {
  var F = function () {};
  F = P;
  F.prototype = $.extend(P.prototype, C.prototype);
  C.prototype = new F();
  C.uber = P.prototype;
  C.prototype.constructor = C;
}