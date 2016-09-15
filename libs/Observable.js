//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/prototype
//http://blog.xebia.fr/2013/06/10/javascript-retour-aux-bases-constructeur-prototype-et-heritage/
function Observable(){
    this._observers = []; // Observer array
}

Observable.prototype.addObserver = function(obs){
  this._observers.push(obs); 
};

Observable.prototype.removeObserver = function(obs){
  var id = this._observers.indexOf(obs);
  if(id !== -1){
    this._observers.splice(id, 1);
  }
};

Observable.prototype.notify = function(event){
  this._observers.forEach(function(obs){
    obs.update(event);
  });
};
