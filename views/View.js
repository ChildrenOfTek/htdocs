// views/View.js


function View(model){
  this._model = model;
  Observable.call(this); // call parent constructor
  this._init();
  this._bindListeners();
}

// Heritage ( View etend Observable)
View.prototype = Object.create(Observable.prototype);

//Association bidirectionnelle ( View.prototype ==> prototype.constructor)
View.prototype.constructor = View; 

// Search for DOM elements
View.prototype._init = function(){
  this._input = document.querySelector('#input');
  this._reset = document.querySelector('#reset');
  this._text = document.querySelector('#text');
};

//View est un Observable, donc peut utiliser la 
//  methode notify() d'Observable.js
View.prototype._bindListeners = function(){
  this._input.addEventListener('keyup', function(e){
    this.notify({type: 'INPUT', data: this._input.value});
  }.bind(this));
  this._reset.addEventListener('click', function(e){
    this.notify({type: 'RESET'});
  }.bind(this));
};

// View est aussi un Observer, donc il lui faut une methode d'update
View.prototype.update = function(event){
  if(event.type === 'TXT_CHANGED'){
    this._input.value = this._model.getText();
    this._text.innerHTML = this._model.getText();
  }
};
