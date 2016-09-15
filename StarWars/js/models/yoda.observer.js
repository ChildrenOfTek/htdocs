// yoda.observer.js
var YodaObserver = function($el) {
// Pour éviter les problèmes de portée , utilisez «base» au lieu de «this»
// Pour référencer cette classe d'événements et de fonctions internes .

    var base = this;
// On définit ici des évènements qui enverront des messages de notification(s) à tous les observers
    base.init = function() {
        /*$('.telepathe', $el).bind('click', function() {
            base.notifyObservers('leia.telepathie');
        });*/


    };
// Ici la méthode notify se chargera de recevoir les notifications envoyées plus tôt
    base.notify = function(event, parameters) {

        switch(event) {

            case 'darthVader.parler':
                //$('.yoda', $el).toggle(500);
                $('.dialog', $el).text('Dans la force une perturbation je sens');
                break;
            case 'leia.telepathie':
                $('.dialog', $el).text("{...Mmh j'entends Leia...}");
                break;
            case 'darthVader.avancer':
                $('.dialog', $el).text("");

                break;

            case 'luke.parler':
                $('.dialog', $el).text("");
                //$('.darthVaderA').hide();
                //$('.darthVaderB').toggle(500);

                break;
            case 'darthVader.duel':
                $('.dialog',$el).text('').toggle(2000);
                $('#yoda').animate({bottom:'80px',right:'300px'}, 1000, function(){});
                $('.dialog',$el).text('Bastonnnn!');
                break;

        }
    };

    return base;
};

extend(YodaObserver, Observer);

// gestion de l'héritage
function extend(C, P) {
    var F = function () {};
    F = P;
    F.prototype = $.extend(P.prototype, C.prototype);
    C.prototype = new F();
    C.uber = P.prototype;
    C.prototype.constructor = C;
}