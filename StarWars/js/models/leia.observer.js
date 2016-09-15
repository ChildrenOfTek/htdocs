// leia.observer.js
var LeiaObserver = function($el) {
// Pour éviter les problèmes de portée , utilisez «base» au lieu de «this»
// Pour référencer cette classe d'événements et de fonctions internes .

    var base = this;
// On définit ici des évènements qui enverront des messages de notification(s) à tous les observers
    base.init = function() {
        $('.telepathe', $el).bind('click', function() {
            base.notifyObservers('leia.telepathie');
        });


    };
// Ici la méthode notify se chargera de recevoir les notifications envoyées plus tôt
    base.notify = function(event, parameters) {

        switch(event) {

            case 'darthVader.parler':
                $('.leia', $el).toggle(500);
                //$('.dialog', $el).text('{...Luke, il ne peut pas m\'entendre!...}');
                break;
            case 'darthVader.avancer':
                $('.leia').hide(500);
                $('.dialog', $el).text("{...Ne fais pas ca...}");
                //$('.dialog', $el).text('{...Luke, il ne peut pas m\'entendre!...}');
                break;

            case 'leia.telepathie':
                $('.dialog', $el).text("{...Et moi je suis ta soeur...}");
                $('.leia', $el).hide(500);
                  break;

            case 'luke.parler':
                $('.leia', $el).hide(500);
                $('.dialog', $el).text("");
                //$('.darthVaderA').hide();
                //$('.darthVaderB').toggle(500);
                break;
            case 'darthVader.duel':
                $('.dialog',$el).text('').toggle(2000);
                $('#leia').animate({top:'180px',left:'300px'}, 1000, function(){});
                $('.dialog',$el).text('Round One, fight!');
                break;

        }
    };

    return base;
};

extend(LeiaObserver, Observer);

// gestion de l'héritage
function extend(C, P) {
    var F = function () {};
    F = P;
    F.prototype = $.extend(P.prototype, C.prototype);
    C.prototype = new F();
    C.uber = P.prototype;
    C.prototype.constructor = C;
}