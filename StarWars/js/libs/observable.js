/**
 * OBSERVABLE CLASS
 * declaration de l'observable
 */
var Observable = function() {
  this.observers = new Array();
};

/**
 * fonctions de l'objet observable
 */
Observable.prototype = {

  // enregistre un observer a recevoir des notifications
  register: function(observer) {
    this.observers.push(observer);
    return this;
  },

  // envoie une notification a tous les observers enregistres
  notifyObservers: function(event, parameters) {
    $.each(this.observers, function(i, observer) {
      observer.notify(event, parameters);
    });
  }
};

