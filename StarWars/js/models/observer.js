/**
 * OBSERVER CLASS
 * declaration de l'observer
 */
var Observer = function() {
  this.observers = new Array();
};

/**
 * fonctions de l'objet observer
 */
Observer.prototype = {
  register: function(observable) {
    this.observable = observable;
    this.notifyMe();

    return this;
  },

  notifyMe: function() {
    this.observable.register(this);
  },

  notifyObservers: function(event, parameters) {
    this.observable.notifyObservers(event, parameters);
  },

  notify: function(event, parameters) {
    return this;
  }
};

// gestion de l'héritage
function extend(C, P) {
  var F = function () {};
  F = P;
  F.prototype = $.extend(P.prototype, C.prototype);
  C.prototype = new F();
  C.uber = P.prototype; //Uber is a method as a helper method to access the parent implementation of a method.
  C.prototype.constructor = C;
}