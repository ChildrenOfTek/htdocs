function Clock(){
  Observable.call(this); // appel du constructeur parent 
  this._hours = 0;
  this._minutes = 0;
  this._seconds = 0;
  this.tic();
}
// Rappel : La propriété Object.prototype représente le prototype de Object 
//car tous les objets JavaScript descendent de Object .
// Revoir :
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/prototype

Clock.prototype = Object.create(Observable.prototype); // Clock extends Observable
Clock.prototype.constructor = Clock;

//Fonction time() de notre Clock avec un appel de l'objet Date()
Clock.prototype.time = function(){
  var d = new Date();
  this.setSeconds(d.getSeconds());
  this.setMinutes(d.getMinutes());
  this.setHours(d.getHours());
};


Clock.prototype.tic = function(){
  if(!this._interval){
    this._interval = setInterval(function(){ // set id of the interval
      this.setSeconds(this._seconds+1); // Add 1 second
    }.bind(this), 1000);
  }
};
/*
Clock.prototype.stop = function(){
  clearInterval(this._interval);
  this._interval = null; // clear interval attribute
};
*/

// GETTERS & SETTERS
// Vous noterez les éléments et règles "métier" dans les setters 
// par exemple ci-dessous si l'heure est supérieure à 23 on repasse à 0, etc... 
// Il faut lire la méthode de la manière suivante: 
// Pour le prototype de notre objet Clock qui prend en parametre h, 
// soit l'heure, on renverra this._hours et this.notify('une_info')
Clock.prototype.setHours = function(h){
  if(h > 23){
   
    h = 0;
  }
  if(h < 0){
    h = 23;
  }
  this._hours = h;
  this.notify({type: 'TIME_CHANGED'}); // ici la notification 
};

Clock.prototype.setMinutes = function(m){
  if(m > 59){
    m = 0;
    this.setHours(this._hours+1);
  }
  if(m < 0){
    m = 59;
    this.setHours(this._hours-1);
  }
  this._minutes = m;
  this.notify({type: 'TIME_CHANGED'});
};

Clock.prototype.setSeconds = function(s){
  if(s > 59){
    s = 0;
    this.setMinutes(this._minutes+1);
  }
  if(s < 0){
    s = 59;
    this.setMinutes(this._minutes-1);
  }
  this._seconds = s;
  this.notify({type: 'TIME_CHANGED'});
};


// Ci dessous les méthodes GET de "renvoi" de nos valeurs HH:MM:SS
Clock.prototype.getHours = function(){
  return this._hours;
};

Clock.prototype.getMinutes = function(){
  return this._minutes;
};

Clock.prototype.getSeconds = function(){
  return this._seconds;
};
