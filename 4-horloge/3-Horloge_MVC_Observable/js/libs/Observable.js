function Observable(){
    this._observers = []; // Observer array
}

Observable.prototype.addObserver = function(obs){
  this._observers.push(obs); // Ajout des observers à mon tableau d'observers
};

Observable.prototype.removeObserver = function(obs){// methode opur supprimer un observer de la liste 
  var id = this._observers.indexOf(obs);
  if(id !== -1){
    this._observers.splice(id, 1);
  }
};

Observable.prototype.notify = function(event){ // methode de notification des observers
  this._observers.forEach(function(obs){
    obs.update(event); // pour chaque observer concerné, je le notifie dès qu'il y a un event !!!
  });
};


